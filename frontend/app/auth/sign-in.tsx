import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SignInScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Sign In</ThemedText>
      <ThemedText>Authentication form will be implemented here.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
});
