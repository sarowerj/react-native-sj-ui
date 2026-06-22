import { View, type ViewStyle } from 'react-native';

interface ViewCardProps extends ViewStyle {
  children: React.ReactNode;
  style?: ViewStyle;
}

const ViewCard: React.FC<ViewCardProps> = ({ children, style, ...rest }) => {
  return (
    <View {...rest} style={style}>
      {children}
    </View>
  );
};

export default ViewCard;
