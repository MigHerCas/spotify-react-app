import { useEffect, useState } from 'react';
import { AccessToken, AccessTokenResponse } from '../api/types';

type UseTokenHookReturn = {
  accessToken: AccessToken | undefined;
};

const useToken = (
  REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL: string | undefined,
  REACT_APP_SPOTIFY_AUTH_HEADER: string | undefined
): UseTokenHookReturn => {
  const [accessToken, setAccessToken] = useState<AccessToken>();

  useEffect(() => {
    const getAccessToken = async (): Promise<void> => {
      try {
        const response = await fetch(
          `${REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL}`,
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              Authorization: `Basic ${REACT_APP_SPOTIFY_AUTH_HEADER}`,
            },
            body: 'grant_type=client_credentials',
          }
        );

        const dataJson = await response;
        const accessTokenResponse: AccessTokenResponse = await dataJson.json();
        setAccessToken(accessTokenResponse.access_token);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    if (
      REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL &&
      REACT_APP_SPOTIFY_AUTH_HEADER
    ) {
      getAccessToken();
    }
  }, [REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL, REACT_APP_SPOTIFY_AUTH_HEADER]);

  return { accessToken };
};

export default useToken;
