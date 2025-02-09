export const Config = {
    API_URL: process.env.REACT_APP_BASE_URL,
    SECRATE_KEY: process.env.REACT_APP_SECRATE_KEY || 'FB175C83-9703-4DF8-977B-638D6EE14D40',
    tokenStorageKey: process.env.REACT_APP_TOKEN_KEY || 'D4HRT',
    Filter: {
      	PageSize: 7,
    },
    Toast: {
      	DelayInMs: 1000,
    },
    DefaultLoginCredentials: {
      UserName: '',
      Password: '',
      ClientId: 'consoleApp',
      Scope: 'FB175C83-9703-4DF8-977B-638D6EE14D40',
      ClientSecret: '!Ppaelosnoc@Ci'
    },
    API: {
      BaseUrl: process.env.REACT_APP_BASE_URL,
      Request: {
        Timeout: {
          Milliseconds: 5000 // Timeout duration in milliseconds (e.g., 5000 ms = 5 seconds)
        },
      }
    }
};
