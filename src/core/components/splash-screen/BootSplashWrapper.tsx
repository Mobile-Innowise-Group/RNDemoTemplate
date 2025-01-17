import React, { useState } from 'react';
import { AnimatedBootSplash } from '@features/bootsplash/AnimatedBootSplash';

interface BootSplashWrapperProps {
  children: React.ReactNode;
}

const BootSplashWrapper: React.FC<BootSplashWrapperProps> = ({ children }) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {children}
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      )}
    </>
  );
};

export { BootSplashWrapper };
