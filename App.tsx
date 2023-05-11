import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home';
import Qibla from './src/screens/Qibla';
import Quran from './src/screens/Quran';
import Settings from './src/screens/Settings';
import Sunnah from './src/screens/Sunnah';
import { Colors } from './src/styles/Globals';

const ROUTES = {
  HOME: 'Prayers',
  SUNNAH: 'Sunnah',
  QURAN: 'Quran',
  QIBLA: 'Qibla',
  SETTINGS: 'Settings',
};

function tabIcons(iconName: string, color: string, size: number): JSX.Element {
  return <Icon name={iconName} color={color} size={size} />;
}

function App(): JSX.Element {
  const Tab = createBottomTabNavigator();
  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      marginBottom: 24,
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
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: {
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingBottom: 4,
                borderRadius: 8,
                shadowColor: Colors.ctaDark,
                shadowOpacity: 0.75,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 2 },
              },
              tabBarShowLabel: true,
              tabBarActiveTintColor: isDarkMode
                ? Colors.ctaDark
                : Colors.ctaLight,
              tabBarIcon: ({ color, focused }) => {
                let iconName: string = '';

                switch (route.name) {
                  case ROUTES.HOME: {
                    iconName = focused ? 'timer-sharp' : 'timer-outline';
                    break;
                  }
                  case ROUTES.QURAN: {
                    iconName = focused ? 'book-sharp' : 'book-outline';
                    break;
                  }
                  case ROUTES.SUNNAH: {
                    iconName = focused ? 'star-sharp' : 'star-outline';
                    break;
                  }
                  case ROUTES.QIBLA: {
                    iconName = focused ? 'compass-sharp' : 'compass-outline';
                    break;
                  }
                  case ROUTES.SETTINGS: {
                    iconName = focused ? 'settings-sharp' : 'settings-outline';
                    break;
                  }
                }

                return tabIcons(iconName, color, 22);
              },
            })}>
            <Tab.Screen name="Prayers" component={Home} />
            <Tab.Screen name="Quran" component={Quran} />
            <Tab.Screen name="Sunnah" component={Sunnah} />
            <Tab.Screen name="Qibla" component={Qibla} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

export default App;
