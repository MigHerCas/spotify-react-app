import React, { useEffect } from 'react';
import { ApiError } from '../../api/error';

interface Props {
  error: ApiError;
}
export default function ErrorModal({ error }: Props): JSX.Element {
  let errorTitle;
  let errorDescription;

  switch (error) {
    case 'Access error':
      errorTitle = 'Something failed while trying to authenticate';
      errorDescription =
        'This might be caused by a network error or a login issue, check it out!';
      break;
    case 'Fetch error':
      errorTitle = 'Something failed while trying to fetch a playlist.';
      errorDescription = 'You better checkout your requested playlists ids!';
      break;
    default:
  }

  useEffect(() => {
    document.querySelector('body')?.classList.add('locked-by-modal');
  }, []);

  return (
    <div className="error-modal">
      <h1 className="error-title">{errorTitle}</h1>
      <h2 className="error-description">{errorDescription}</h2>
    </div>
  );
}
