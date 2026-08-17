import React from 'react';
import type { SvgProps ,} from 'react-native-svg';

type SvgComponent = React.FC<SvgProps>;

type SvgAppIconProps = {
  icon: SvgComponent;
  color?: string;
  size?: number;
};

function SvgAppIcon({
  icon: Icon,
  color = '#777777',
  size = 20,
}: SvgAppIconProps) {
  return <Icon width={size} height={size} color={color} />;
}

export default SvgAppIcon;
