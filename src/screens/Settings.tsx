import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from '../styles/Globals';

const styles = StyleSheet.create({
  viewStyles: {
    width: '100%',
    height: '100%',
  },
});

function Settings(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode
      ? Colors.backgroundDark
      : Colors.backgroundLight,
  };

  return (
    <View style={backgroundStyle}>
      <View style={styles.viewStyles}>
        <Text></Text>
      </View>
    </View>
  );
}

export default Settings;
