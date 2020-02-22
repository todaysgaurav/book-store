
import React from 'react';
import Header from './Header';
import Books from './Books';
import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const App: () => React$Node = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <SafeAreaView>
          <Books/>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  }
 });

export default App;
