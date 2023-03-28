import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';
import Home from './screens/Home';
import { Colors } from './styles/Globals';

const styles = StyleSheet.create({
  viewStyles: {
    width: '100%',
    height: '100%',
  },
});

const Tab = createBottomTabNavigator();

function Navigation(): JSX.Element {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? Colors.backgroundDark
      : Colors.backgroundLight,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
