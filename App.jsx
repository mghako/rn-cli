import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  AppRegistry,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { useAuth, AuthProvider } from './src/context/AuthContext';
import AppStack from './src/routes/navigation/AppStack';
import AuthStack from './src/routes/navigation/AuthStack';
import { PaperProvider } from 'react-native-paper';


function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider>
      <AuthProvider>
        <Layout></Layout>
      </AuthProvider>
    </PaperProvider>
  );
}

const Layout = () => {
  const {authState, onLogout} = useAuth();
  return (
    <NavigationContainer>
      {
        authState.authenticated ? (<AppStack />) : (<AuthStack />)
      }
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
