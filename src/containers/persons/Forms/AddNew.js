//Add new doctor /Chemist Form

import React,{ Component } from 'react';
import{
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import {
  Alerts,
  Button,
  Card,
  Spacer,
  List,
  ListItem,
} from '@components/ui/';


//Define fields here only
var t = require('tcomb-form-native');
var Form = t.form.Form;
var Type = t.enums({
  Doctor: 'Doctor',
  Chemist: 'Chemist'
});
var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});


// here we are: define your domain model
var Person = t.struct({
  name: t.String,
  gender: Gender,            // a required string
  phone: t.Number,
  address: t.String,  // an optional string
  birthday: t.Date,               // a required number
  email: t.String,
  type:Type
});

var options = {}; // optional rendering options (see documentation)

export default class AddNewPerson extends Component{
  onPress() {
      var value = this.refs.form.getValue();
      if (value) {
        console.log(value);
      }
    }

    render() {

      return (
        <ScrollView style={styles.container}>
        <Card>
          <Form
            ref="form"
            type={Person}
            options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
          <Spacer size={10} />
          </ Card>
        </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    marginBottom:30,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
