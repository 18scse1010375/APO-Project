import { EnvVars } from "./models/envs.model";
export let env: EnvVars = {
  status: 'error',
  currentEnv: 'dev',
  imsClientId: 'apo-console',
  serviceApiKey: '',
  serviceHost: 'https://mpcc-cicd.adobe.io',  // to remove test warning
  imsEnvironment: 'stg1',

};
export const setEnv = (data: EnvVars) => {
  env = {...data};
};
