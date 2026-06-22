import React from 'react';
import type { ReactNode } from 'react';
import type { ViewProps, ViewStyle, StyleProp } from 'react-native';

import { View } from 'react-native';

interface FlexProps extends ViewProps {
  children?: ReactNode;

  direction?: ViewStyle['flexDirection'];

  flex?: ViewStyle['flex'];
  flexGrow?: ViewStyle['flexGrow'];
  flexShrink?: ViewStyle['flexShrink'];
  flexWrap?: ViewStyle['flexWrap'];

  gap?: ViewStyle['gap'];

  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];
  alignSelf?: ViewStyle['alignSelf'];

  style?: StyleProp<ViewStyle>;
}

const Flex: React.FC<FlexProps> = ({
  children,

  direction = 'column',

  flex,
  flexGrow,
  flexShrink,
  flexWrap,

  gap,

  justifyContent = 'flex-start',
  alignItems = 'stretch',
  alignSelf,

  style,
  ...rest
}) => {
  return (
    <View
      {...rest}
      style={[
        {
          flexDirection: direction,

          flex,
          flexGrow,
          flexShrink,
          flexWrap,

          gap,

          justifyContent,
          alignItems,
          alignSelf,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Flex;
