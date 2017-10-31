/**
 * Recipe View Screen
 *  - The individual recipe screen
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Image, Button } from '@shoutem/ui'
import { Actions } from 'react-native-router-flux';
// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Card, Spacer, Text } from '@ui/';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  featuredImage: {
    left: 0,
    right: 0,
    height: AppSizes.screen.height * 0.2,
    resizeMode: 'cover',
  },
  container: {
    marginTop: 40,
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#CC66FF',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
  },
});

/* Component ==================================================================== */
class PersonView extends Component {
  static componentName = 'PersonView';
  constructor(props){
    super(props);
    this.state={
      person: this.props.doctor
    }
  }
  static propTypes = {
    doctor: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      image: PropTypes.string,
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }
onPress(){
  switch (this.state.person.type) {
    case 'Doctor':
    Actions.ProductsListing({ products: this.state.person.products });
      break;
    case 'Chemist':
    Actions.DoctorListing({ids:this.state.person.doctors,title:"Doctors"});
      break;
    default:

  }
}
  render = () => {
    const { name, address, image, phone, email } = this.props.doctor;

    return (
      <ScrollView style={styles.container}>
      <Card style={{justifyContent:'center'}}>
      {image !== '' &&
      <Image
      style={{alignSelf:'center'}}
      styleName="medium-avatar"
      source={{ uri: image}}
      />
    }
     </Card>


        <Card>
          <Text h1>{name}</Text>

        {phone ?

            <Text h2>{phone}</Text>

        : null}

        {address ?
            <Text h2>{address}</Text>
        : null}
        </Card>
        <Spacer size={15} />
        <Button styleName="confirmation dark" onPress={this.onPress.bind(this)}>
         <Text>Check In</Text>
        </Button>

        <Spacer size={20} />
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default PersonView;
