import React, { Component } from 'react';
import SearchBar from 'react-native-material-design-searchbar';
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';

export default class ExampleComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
         <SearchBar
        onSearchChange={() => console.log('On Search Change')}
        height={50}
        onFocus={() => console.log('On Focus')}
        onBlur={() => console.log('On Blur')}
        placeholder={'Search Twitter'}
        autoCorrect={false}
        padding={5}
        returnKeyType={'search'}
      />
      <View style={styles.alternativeLayoutbuttonContainer}>
          <Text style={{color:'skyblue'}}>All</Text>
          <Text> Mention</Text>
      
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'space-between',
  },
  buttonContainer: {
    margin: 20,
    color: 'blue',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'column',

  }
})