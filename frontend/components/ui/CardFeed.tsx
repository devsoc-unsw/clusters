import { StyleSheet, View, Text } from 'react-native';
import { EventStatusType } from '@/lib/types/enums';

interface CardFeedProps {
  title: string;
  description: string;
  start_time: string;
  end_time?: string;
  category_tags: string[];
  status: EventStatusType;
  cover_image_url?: string;
}

export default function CardFeed({
  title,
  description,
  start_time,
  end_time,
  category_tags,
  status,
  // cover_image_url,
}: CardFeedProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.status}>{status.toUpperCase()}</Text>
      </View>

      <View style={styles.coverImageContainer} />

      <View style={styles.bottomContainer}>
        <View style={styles.leftContent}>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.tagsContainer}>
            {category_tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.timeLabel}>Start:</Text>
          <Text style={styles.timeText}>{start_time}</Text>
          {end_time && (
            <>
              <Text style={styles.timeLabel}>End:</Text>
              <Text style={styles.timeText}>{end_time}</Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 400,
    padding: 20,
    marginBottom: 12,
    borderRadius: 20,
    backgroundColor: 'green',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
  },
  status: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#DDEEFF',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2255AA',
  },
  coverImageContainer: {
    height: 240,
    backgroundColor: 'black',
    borderRadius: 12,
    marginBottom: 12,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  leftContent: {
    flex: 1.3,
    marginRight: 10,
    marginTop: 10,
  },
  description: {
    fontSize: 15,
    marginBottom: 6,
    color: 'white',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  tagText: {
    fontSize: 12,
    color: '#444',
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  timeLabel: {
    fontWeight: 'bold',
    color: 'white',
  },
  timeText: {
    color: 'white',
    marginBottom: 4,
  },
});
