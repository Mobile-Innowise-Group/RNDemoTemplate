import Svg, { G, Path, SvgProps } from 'react-native-svg';

export const ProfileIcon = (props: SvgProps) => (
  <Svg fill="none" height={24} viewBox="0 0 23 22" width={24} {...props}>
    <G stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <Path d="M12.12 12.78a.963.963 0 00-.24 0 3.27 3.27 0 01-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 01.12 6.55zM18.74 19.38A9.934 9.934 0 0112 22c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58z" />
      <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    </G>
  </Svg>
);
