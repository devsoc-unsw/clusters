import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function OnboardingScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome to Clusters</ThemedText>
      <ThemedText>User onboarding flow will be implemented here.</ThemedText>
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
