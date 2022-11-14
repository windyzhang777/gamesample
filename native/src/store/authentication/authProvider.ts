import MSALClient, {MSALPromptType} from 'react-native-msal';

// TODO: There is a lot of mobile/web duplication right here. When we do the work to move these variables to
//       environment variables instead of hardcoded we should move to share as much of it as we can.
const clientId = '22bb031f-c846-42cc-9da2-f06839debe60';
const authority =
  'https://bounteousmars.b2clogin.com/tfp/bounteousmars.onmicrosoft.com/b2c_1_playfab_retest_1_signsignup';

// Msal Configurations
export const authenticationParameters = {
  scopes: [
    'https://bounteousmars.onmicrosoft.com/22bb031f-c846-42cc-9da2-f06839debe60/authentication',
  ],
  promptType: MSALPromptType.LOGIN,
  forceRefresh: true,
};

export const msalClient = new MSALClient(clientId);
export const authProvider = undefined;
