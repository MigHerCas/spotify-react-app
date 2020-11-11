import React, { useEffect, useState } from 'react';

function App(): JSX.Element {
  const [accessToken, setAccessToken] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getAccessToken = async (): Promise<void> => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Authorization:
              'Basic M2YwODRlYjk4Njc1NDdjNDk3MTExN2E4NjY0ZTI3N2Q6Y2NhOGQ0NTc4YTZmNGE0YmJmMmExN2MzMmJjYTNmNzk=',
          },
          body: 'grant_type=client_credentials',
        });
        const dataJson = await response;
        const accessTokenResponse = await dataJson.json();
        setAccessToken(accessTokenResponse);
      } catch (error) {
        setIsError(error);
      }

      setIsLoading(false);
    };

    getAccessToken();
  }, []);

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
