import React, { useEffect, useState } from 'react';

function App(): JSX.Element {
  const [accessToken, setAccessToken] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL,
    REACT_APP_SPOTIFY_AUTH_HEADER,
  } = process.env;

  useEffect(() => {
    const getAccessToken = async (): Promise<void> => {
      setIsError(false);
      setIsLoading(true);

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
        const accessTokenResponse = await dataJson.json();
        setAccessToken(accessTokenResponse);
      } catch (error) {
        setIsError(error);
      }

      setIsLoading(false);
    };

    getAccessToken();
  }, [REACT_APP_SPOTIFY_ACCOUNT_TOKEN_API_URL, REACT_APP_SPOTIFY_AUTH_HEADER]);

  useEffect(() => {
    console.log(accessToken);
  }, [accessToken]);
  return (
    <div className="App">
      <h1>App</h1>
      {isError && <span>{isError}</span>}
      {isLoading && <span>{isLoading}</span>}
    </div>
  );
}

export default App;
