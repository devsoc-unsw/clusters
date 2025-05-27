import { TextInput, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

interface InputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
}

export function Input({ 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1
}: InputProps) {
  const backgroundColor = useThemeColor({}, 'background');
  const borderColor = useThemeColor({}, 'text');
  const textColor = useThemeColor({}, 'text');

  return (
    <TextInput
      style={[
        styles.input,
        { 
          backgroundColor, 
          borderColor: borderColor + '40',
          color: textColor 
        },
        multiline && { height: numberOfLines * 20 + 20 }
      ]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      numberOfLines={numberOfLines}
      placeholderTextColor={borderColor + '80'}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
});