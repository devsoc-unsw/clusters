import { FlatList, StyleSheet, ViewStyle } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import CardFeed from '@/components/ui/CardFeed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EventStatusType } from '@/lib/types/enums';
// Mock Data
const mockEvents = [
  {
    id: '1',
    title: 'Tech Meetup',
    description: 'Join us for a tech talk!',
    start_time: '2025-06-06',
    end_time: '2025-06-07',
    category_tags: ['Tech', 'Networking'],
    status: 'upcoming' as EventStatusType,
    cover_image_url: undefined,
  },
  {
    id: '2',
    title: 'Art Expo',
    description: 'Explore modern art pieces.',
    start_time: '2025-06-10',
    end_time: '2025-06-11',
    category_tags: ['Art', 'Exhibition'],
    status: 'upcoming' as EventStatusType,
    cover_image_url: undefined,
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const containerStyle: ViewStyle = {
    ...styles.container,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left + 16,
    paddingRight: insets.right + 16,
  };

  return (
    <ThemedView style={containerStyle}>
      <FlatList
        data={mockEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardFeed
            title={item.title}
            description={item.description}
            start_time={item.start_time}
            end_time={item.end_time}
            category_tags={item.category_tags}
            status={item.status}
            cover_image_url={item.cover_image_url}
          />
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
