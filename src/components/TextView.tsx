import type { TextProps, TextStyle, StyleProp } from 'react-native';
import type { ReactNode } from 'react';
import { Text } from 'react-native';
import { useTheme } from '../hooks/useTheme';
import type { TextSize, ThemeColor } from '../theme/types';

interface TextViewProps extends TextProps {
  size?: TextSize;
  fontSize?: TextStyle['fontSize'];

  color?: ThemeColor;
  textColor?: TextStyle['color'];

  fontWeight?: TextStyle['fontWeight'];
  textAlign?: TextStyle['textAlign'];
  textDecorationLine?: TextStyle['textDecorationLine'];
  style?: StyleProp<TextStyle>;
  children: ReactNode;
}

const TextView: React.FC<TextViewProps> = ({
  size = 'body',
  fontSize,
  color,
  textColor,
  fontWeight,
  textAlign,
  textDecorationLine,
  children,
  style,
  ...rest
}) => {
  const theme = useTheme();

  const resolvedFontSize = fontSize ?? theme.typography.fontSize[size];

  const resolvedColor =
    textColor ?? (color ? theme.colors[color] : theme.colors.text);
  return (
    <Text
      style={[
        {
          color: resolvedColor,
          fontSize: resolvedFontSize,
          fontWeight,
          textAlign,
          textDecorationLine,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default TextView;
