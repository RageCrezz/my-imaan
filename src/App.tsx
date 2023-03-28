import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme, View } from 'react-native';
import Home from './screens/Home';
import { Colors } from './styles/Globals';

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();

  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    bg: {
      backgroundColor: isDarkMode
        ? Colors.backgroundDark
        : Colors.backgroundLight,
      flex: 1,
    },
  });

  return (
    <View style={styles.bg}>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;
