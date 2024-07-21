// LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Go to Journal"
        onPress={() => navigation.navigate('Journal')}
      />
    </View>
  );
};

export default LoginScreen;
