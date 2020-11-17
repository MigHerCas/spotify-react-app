/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, SVGProps, useEffect, useRef } from 'react';

interface IconProps {
  name: string;
}

// Source: https://stackoverflow.com/a/61472427

export default function Icon({ name, ...rest }: IconProps): JSX.Element | null {
  const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = React.useState(false);

  useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current =
          /* eslint-disable-next-line global-require */
          (await require(`/assets/icons/${name}.svg`)).ReactComponent;
      } catch (err) {
        console.log(err);
      } finally {
        console.log('Icon imported');
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
}
