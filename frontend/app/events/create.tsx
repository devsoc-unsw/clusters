import { StyleSheet, TextInput, View, Image, Alert, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button } from '@/components/common';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

type TagCardProps = {
  tag: string;
};



function TagCard({ tag }: TagCardProps) {
  return (
    <>
      <View style={styles.tagCard}>
        <ThemedText>{tag}</ThemedText>
      </View>
    </>
  )
}
export default function CreateEventScreen() {
  type ImageItem = ImagePicker.ImagePickerAsset;

  const [descriptionInputHeight, setDescriptionInputHeight] = useState(40);
  const [addedTags, setAddedTags] = useState<string[]>([]);

  type CreateEventFormData = {
    eventName: {value: string},
    description: {value: string},
    society: {value: string},
    images: ImageItem[],
    dateAndTime: {value: string},
    location: {value: string},
    tagInput: {value: string}
  }
  const createEventFormInitialData: CreateEventFormData = {
    eventName: {value: ''},
    description: {value: ''},
    society: {value: ''},
    images: [],
    dateAndTime: {value: ''},
    location: {value: ''},
    tagInput: {value: ''}
  }

  const [createEventForm, setCreateEventForm] = useState<CreateEventFormData>(createEventFormInitialData);

  const handleFormInputChange = (fieldName: any, value: any) => {
    setCreateEventForm((prevData) => ({
      ...prevData,
      [fieldName]: {value: value}
    }))
  }

  const handleCreateEventFormSubmit = () => {

    setCreateEventForm(() => createEventFormInitialData);
  }

  const handlePressAddTagBtn = () => {
    setAddedTags((prevData) => [...prevData, createEventForm.tagInput.value]);
    console.log(createEventForm.images);
    setCreateEventForm((prevData) => ({
      ...prevData,
      tagInput: {value: ''}
    }))
  }

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'We need access to your photos to upload images.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setCreateEventForm((prevData) => ({
        ...prevData,
        images: [...prevData.images, result.assets[0]]
  
      }));
    }
  };
   
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Create Event</ThemedText>
      <ThemedText>Event creation form will be implemented here.</ThemedText>

      <ThemedView style={{ backgroundColor: '', width: '100%', height: '100%', display: 'flex'}}>
        <ThemedView style={styles.inputGroup}>
          <ThemedText style={styles.inputLabel}>Event Name</ThemedText>
          <TextInput
          style={styles.textInput}
          placeholder="Enter event name"
          placeholderTextColor="#888"
          onChangeText={text => handleFormInputChange('eventName', text)}
          value={createEventForm['eventName'].value}
          />
        </ThemedView>

        <ThemedView style={styles.inputGroup}>
          <ThemedText style={styles.inputLabel}>Event Description</ThemedText>
          <TextInput
          style={[styles.textInput, { minHeight: descriptionInputHeight }]}
          placeholder="Enter event description"
          placeholderTextColor="#888"
          multiline
          numberOfLines={1}
          onContentSizeChange={(event) => {
            setDescriptionInputHeight(event.nativeEvent.contentSize.height);
          }}
          onChangeText={text => handleFormInputChange('description', text)}
          value={createEventForm['description'].value}
          />
        </ThemedView>

        <ThemedView style={styles.inputGroup}>
          <ThemedText style={styles.inputLabel}>Society</ThemedText>
          <TextInput
          style={styles.textInput}
          placeholder="Enter Society Name"
          placeholderTextColor="#888"
          onChangeText={text => handleFormInputChange('society', text)}
          value={createEventForm['society'].value}
          />
        </ThemedView>

        <ThemedView style={styles.inputGroup}>
          <ThemedText style={styles.inputLabel}>Location</ThemedText>
          <TextInput
          style={styles.textInput}
          placeholder="Enter location"
          placeholderTextColor="#888"
          onChangeText={text => handleFormInputChange('location', text)}
          value={createEventForm['location'].value}
          />
        </ThemedView>
        
        <ThemedView style={styles.inputGroup}>
          <ThemedText style={styles.inputLabel}>Date and time</ThemedText>
          <TextInput
          style={styles.textInput}
          placeholder="Enter date and time"
          placeholderTextColor="#888"
          onChangeText={text => handleFormInputChange('dateAndTime', text)}
          value={createEventForm['dateAndTime'].value}
          />
        </ThemedView>

        <ThemedView style={styles.inputGroup}>
          <ThemedText style={styles.inputLabel}>Tags</ThemedText>
          <ThemedView style={{display: 'flex', flexDirection: 'row', gap: 5, maxWidth: '100%', flexWrap: 'wrap'}}>
            {addedTags.map(tag => <TagCard tag={tag}/>)}
          </ThemedView>
          
          <ThemedView style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 30}}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter tags"
              placeholderTextColor="#888"
              onChangeText={text => handleFormInputChange('tagInput', text)}
              value={createEventForm['tagInput'].value}
            />
            <Button title="Add tag" onPress={() => {handlePressAddTagBtn()}}></Button>
          </ThemedView>
          
        </ThemedView>

        <ThemedView style={styles.inputGroup}>
          
          <View style={{width: '40%'}}>
            <Button title="Upload Image" onPress={() => {pickImage()}} />
          </View>
          <ScrollView horizontal style={{ marginVertical: 10 }}>
            {createEventForm.images.map((image, index) => 
              <Image 
                key={index}
                source={{ uri: image.uri }}
                style={{ width: 100, height: 100, marginRight: 10 }}
              />
            )}
          </ScrollView>
          
        </ThemedView>
        <Button title='Create Event' onPress={() => {handleCreateEventFormSubmit()}}></Button>
      </ThemedView>


      
      
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textInput: {
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    borderWidth: 1,
    borderColor: '#333333',
    minHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 10,
    fontSize: 16,
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    marginBottom: 16
  },
  inputLabel: {
    fontSize: 16,
  },
  tagCard: {
    padding: 5, 
    backgroundColor: '#46484d'
  }
});
