import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';



function Header(){
  return(  
      <Text contentInsetAdjustmentBehavior="automatic" style={styles.header}>List Of Books</Text>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#080808' ,
    color:'#FBF6F6',
    fontSize: 40,
    textAlign: "center"
  }
});
export default Header;