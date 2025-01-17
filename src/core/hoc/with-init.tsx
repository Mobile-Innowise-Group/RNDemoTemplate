import { useEffect, FC } from 'react';

export const withInit = <P extends object>(
  init: () => Promise<void>,
  Component: React.ComponentType<P>,
): FC<P> => {
  return function WrappedComponent(props: P) {
    useEffect(() => {
      init().finally(() => {
        // TODO: Perform actions after initialisation is complete, if necessary
      });
    }, []);

    return <Component {...props} />;
  };
};
