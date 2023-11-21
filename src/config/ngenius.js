import axios from "axios";

export const getAccessToken = async (apiKey) => {
  return new Promise((resolve, reject) => {
    const headers = {
      'accept': 'application/vnd.ni-identity.v1+json',
      'authorization': `Basic ${apiKey}`,
      'content-type': 'application/vnd.ni-identity.v1+json'
    };

    axios.post(
      'https://api-gateway.sandbox.ngenius-payments.com/identity/auth/access-token',
      { realmName: 'ni' },
      { headers }
    )
      .then(response => {
        if (response.data && response.data.access_token) {
          resolve(response.data.access_token);
        } else {
          reject(new Error('Access token not found in response'));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
