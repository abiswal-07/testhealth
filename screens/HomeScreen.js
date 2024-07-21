// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { theme } from '../Theme';

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        padding: 16,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          marginBottom: 16,
          color: theme.colors.primary,
        }}
      >
        Welcome to the Mental Health App
      </Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        color={theme.colors.primary}
      />
    </View>
  );
};

export default HomeScreen;
