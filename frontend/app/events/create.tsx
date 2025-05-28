import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CreateEventScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Create Event</ThemedText>
      <ThemedText>Event creation form will be implemented here.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
