//Add new doctor /Chemist Form

import React,{ Component } from 'react';
import{
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


// Define fields here only
const t = require('tcomb-form-native');
const Form = t.form.Form;
const Type = t.enums({
  Doctor: 'Doctor',
  Chemist: 'Chemist'
});
const Gender = t.enums({
  M: 'Male',
  F: 'Female'
});


// here we are: define your domain model
const Meeting = t.struct({
  numberOfProducts: t.Number,
  products: t.String,            // a required string
  qunatity: t.Number,
  gift: t.String,  // an optional string
  remark: t.String,               // a required number
});

const options = {}; // optional rendering options (see documentation)

export default class DoctorMeeting extends Component{
  onPress() {
      var value = this.refs.form.getValue();
      if (value) {
        console.log(value);
      }
    }

    render() {

      return (
        <View style={styles.container}>
          <Form
            ref="form"
            type={Meeting}
            options={options}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
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
