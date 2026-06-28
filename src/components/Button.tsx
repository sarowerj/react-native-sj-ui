import {
  ActivityIndicator,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native';
import ViewCard from './ViewCard';
import TextView from './TextView';

type ButtonVariant = 'solid' | 'outline' | 'ghost';

type ButtonColorScheme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  children?: React.ReactNode;

  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;

  loading?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  fullWidth?: boolean;

  borderRadius?: number;

  onPress?: () => void;
}

const COLORS = {
  primary: '#2563EB',
  secondary: '#6B7280',
  success: '#16A34A',
  danger: '#DC2626',
  warning: '#D97706',
  info: '#0891B2',
};

const Button: React.FC<ButtonProps> = ({
  title,
  children,
  variant = 'solid',
  colorScheme = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  borderRadius = 8,
  onPress,
  ...props
}) => {
  const color = COLORS[colorScheme];

  const sizeStyle = {
    sm: {
      paddingVertical: 8,
      paddingHorizontal: 12,
      fontSize: 14,
    },
    md: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      fontSize: 16,
    },
    lg: {
      paddingVertical: 16,
      paddingHorizontal: 20,
      fontSize: 18,
    },
  }[size];

  let backgroundColor = color;
  let borderColor = color;
  let borderWidth = 0;
  let textColor = '#fff';

  switch (variant) {
    case 'outline':
      backgroundColor = 'transparent';
      borderColor = color;
      borderWidth = 1;
      textColor = color;
      break;

    case 'ghost':
      backgroundColor = 'transparent';
      borderColor = 'transparent';
      borderWidth = 0;
      textColor = color;
      break;
  }

  if (disabled) {
    backgroundColor = '#D1D5DB';
    borderColor = '#D1D5DB';
    textColor = '#6B7280';
  }

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
    >
      <ViewCard
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gap={8}
        width={fullWidth ? '100%' : undefined}
        paddingVertical={sizeStyle.paddingVertical}
        paddingHorizontal={sizeStyle.paddingHorizontal}
        borderRadius={borderRadius}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderWidth={borderWidth}
        opacity={disabled ? 0.6 : 1}
      >
        {loading ? (
          <ActivityIndicator
            color={variant === 'solid' ? '#fff' : color}
            size="small"
          />
        ) : (
          <>
            {leftIcon}

            {title && (
              <TextView
                textColor={textColor}
                fontWeight="600"
                fontSize={sizeStyle.fontSize}
              >
                {title}
              </TextView>
            )}

            {children}

            {rightIcon}
          </>
        )}
      </ViewCard>
    </TouchableOpacity>
  );
};

export default Button;
