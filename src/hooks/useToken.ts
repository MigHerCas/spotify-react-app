import { useEffect, useState } from 'react';
import { ApiError } from '../api/error';
import { AccessToken, AccessTokenResponse } from '../api/user';

type UseTokenHookReturn = {
  accessToken: AccessToken | undefined;
  accessIsLoading: boolean;
  accessError: ApiError;
};

const useToken = (
  REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL: string | undefined,
  REACT_APP_SPOTIFY_AUTH_HEADER: string | undefined
): UseTokenHookReturn => {
  const [accessToken, setAccessToken] = useState<AccessToken>();
  const [accessIsLoading, setAccessIsLoading] = useState(false);
  const [accessError, setAccessError] = useState<ApiError>('');

  useEffect(() => {
    const url = `${REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL}`;
    const getAccessToken = async (): Promise<void> => {
      setAccessError('');
      setAccessIsLoading(true);

      try {
        const response = await fetch(url, {
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Authorization: `Basic ${REACT_APP_SPOTIFY_AUTH_HEADER}`,
          },
          body: 'grant_type=client_credentials',
        });

        const apiResponse = await response;
        const accessTokenResponse: AccessTokenResponse = await apiResponse.json();
        setAccessToken(accessTokenResponse.access_token);
        setAccessIsLoading(false);
      } catch (error) {
        setAccessError('Access error');
      }
    };

    if (
      REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL &&
      REACT_APP_SPOTIFY_AUTH_HEADER
    ) {
      getAccessToken();
    }
  }, [REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL, REACT_APP_SPOTIFY_AUTH_HEADER]);

  return { accessToken, accessIsLoading, accessError };
};

export default useToken;
