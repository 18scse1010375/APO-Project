import { AdobeIMS } from '@identity/imslib';
import { IAdobeIdData } from '@identity/imslib/adobe-id/IAdobeIdData';
import { IEnvironment } from '@identity/imslib/adobe-id/IEnvironment';

import { userStore } from '../store/UserStore';
import React from "react";
import { redirect } from 'react-router-dom';


export const getImsScopes = (): string => {
  return ['AdobeID', 'openid'].filter(Boolean).join(',');
};

export const login = () => {
  try {
    if (!adobeIms) {
      return;
    }
    if (adobeIms.isSignedInUser()) {
      updateUserProfile();
    }
  } catch (e) {
    console.error('login', e);
  }
};

export const logout = () => {
  try {
    adobeIms.signOut();
    let profile = null;
    userStore.updateData(profile, 'token');
  } catch (e) {
    console.error('logout', e);
  }
};

export const updateUserProfile = () => {
  adobeIms.getProfile().then(profile => {
    userStore.updateData(profile, adobeIms.getAccessToken().token)
    //  window.location.href = '/home'

  }).catch( ex => {
    console.error('profile', ex);
  });
};

const adobeData: IAdobeIdData = {
  client_id: 'apo-console', // eslint-disable-line
  locale: 'en',
  scope: getImsScopes(),
  environment: IEnvironment.STAGE,
  useLocalStorage: true,
  onAccessToken: (): any => ({}),
  onAccessTokenHasExpired: (): any => ({}),
  onReauthAccessToken: (): any => ({}),
  onReady: login,
  onError: (): any => ({}), // eslint-disable-line
};


export const adobeIms = new AdobeIMS(adobeData);
