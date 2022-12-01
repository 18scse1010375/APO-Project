import { UserProfile } from '../model/ims';
import {profilePictureBaseUrl} from '../constants';
import { action, makeObservable, observable } from 'mobx';

export class UserStore {

   firstName = '';
   lastName = '';
   email = '';
   accessToken = '';
   isLoggedIn = false;
   loggingIn = true;
   profilePictureUrl;
   isImsInit = false;
   
   constructor() {
    makeObservable(this, {
      firstName: observable,
      lastName: observable,
      email: observable,
      isLoggedIn: observable,
      loggingIn: observable,
      isImsInit: observable,
      accessToken: observable,
      profilePictureUrl: observable,
      updateData: action,
    });
  }

  updateData(profile: UserProfile, accessToken: string) {
    this.firstName = profile.first_name;
    this.lastName = profile.last_name;
    this.email = profile.email;
    this.accessToken = accessToken;
    this.isLoggedIn = true;
    this.loggingIn = false;
    this.profilePictureUrl = profilePictureBaseUrl + this.email.substring(0, this.email.indexOf('@')).toLowerCase();
  }

  setImsInit(isImsInit: boolean) {
    this.isImsInit = isImsInit;
  }
}

export const userStore = new UserStore();
