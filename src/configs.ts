import { EnvVars } from "./models/envs.model";
export let env: EnvVars = {
  status: 'error',
  currentEnv: 'dev',
  imsClientId: 'apo-console',
  serviceApiKey: '',
  serviceHost: '',
  imsEnvironment: 'stg1',
  isProd: false,
  maxFileSizeMB: ''
};
export const setEnv = (data: EnvVars) => {
  console.log('Got environment variables = ' + data)
  env = {...data};
};

