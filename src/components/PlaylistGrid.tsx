import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function PlaylistGrid({ children }: Props): JSX.Element {
  return (
    <div className="container">
      <div className="grid">{children}</div>
    </div>
  );
}
