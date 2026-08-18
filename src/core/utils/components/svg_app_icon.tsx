import React from 'react';
import type { SvgProps } from 'react-native-svg';
import { colors } from '../../theme/colors';

type SvgComponent = React.FC<SvgProps>;

type SvgAppIconProps = {
  icon: SvgComponent;
  color?: string;
  size?: number;
};

function SvgAppIcon({
  icon: Icon,
  color = colors.inactive,
  size = 20,
}: SvgAppIconProps) {
  return <Icon width={size} height={size} color={color} />;
}

export default SvgAppIcon;
