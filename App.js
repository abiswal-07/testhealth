// App.js
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import JournalScreen from './screens/JournalScreen';
import { theme } from './Theme';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: theme.colors.primary,
            inactiveTintColor: theme.colors.text,
            style: {
              backgroundColor: theme.colors.surface,
            },
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Journal" component={JournalScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
