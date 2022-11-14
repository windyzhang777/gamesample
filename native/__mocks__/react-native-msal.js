export const mockMSAL = {
  acquireTokenSilent: jest.fn(),
  acquireToken: jest.fn(),
  signout: jest.fn(),
  removeAccount: jest.fn(),
};

export default () => mockMSAL;

export const MSALPromptType = {
  LOGIN: 'login',
};
