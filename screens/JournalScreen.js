// JournalScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, AsyncStorage } from 'react-native';
import { theme } from '../Theme';

const JournalScreen = () => {
  const [mood, setMood] = useState('😊');
  const [journalEntry, setJournalEntry] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    loadEntriesFromAsyncStorage();
  }, []);

  const loadEntriesFromAsyncStorage = async () => {
    try {
      const storedEntries = await AsyncStorage.getItem('journalEntries');
      if (storedEntries !== null) {
        setEntries(JSON.parse(storedEntries));
      }
    } catch (error) {
      console.error('Error loading entries from AsyncStorage:', error);
    }
  };

  const saveEntryToAsyncStorage = async () => {
    try {
      const newEntry = {
        mood,
        entry: journalEntry,
        timestamp: new Date().toLocaleString(),
      };

      // Save the new entry to AsyncStorage
      const updatedEntries = [...entries, newEntry];
      setEntries(updatedEntries);
      await AsyncStorage.setItem('journalEntries', JSON.stringify(updatedEntries));

      // Reset the mood and entry input
      setMood('😊');
      setJournalEntry('');
    } catch (error) {
      console.error('Error saving entry to AsyncStorage:', error);
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 16,
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 16, color: theme.colors.primary }}>
        Journal Screen
      </Text>
      <TextInput
        placeholder="Enter your journal entry"
        multiline
        numberOfLines={4}
        value={journalEntry}
        onChangeText={(text) => setJournalEntry(text)}
        style={{
          backgroundColor: theme.colors.surface,
          padding: 8,
          marginBottom: 16,
        }}
      />
      <TextInput
        placeholder="Current Mood"
        value={mood}
        onChangeText={(text) => setMood(text)}
        style={{
          backgroundColor: theme.colors.surface,
          padding: 8,
          marginBottom: 16,
        }}
      />
      <Button
        title="Save Entry"
        onPress={() => saveEntryToAsyncStorage()}
        color={theme.colors.primary}
      />
      <Text style={{ fontSize: 20, marginVertical: 16, color: theme.colors.primary }}>
        Previous Entries:
      </Text>
      {entries.map((entry, index) => (
        <View
          key={index}
          style={{
            backgroundColor: theme.colors.surface,
            padding: 16,
            marginBottom: 16,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: theme.colors.text }}>
            Mood: {entry.mood}
          </Text>
          <Text style={{ color: theme.colors.text }}>
            Entry: {entry.entry}
          </Text>
          <Text style={{ color: theme.colors.text }}>
            Timestamp: {entry.timestamp}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default JournalScreen;
