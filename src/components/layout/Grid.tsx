import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Grid({ children }: Props): JSX.Element {
  return <main className="grid">{children}</main>;
}
