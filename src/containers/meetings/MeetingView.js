/**
 * Meeting View Screen
 *  - The individual Meeting screen
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
import { Image } from '@shoutem/ui'

import {
  Alerts,
  Button,
  Card,
  Spacer,
  List,
  Text ,
  ListItem,
} from '@components/ui/';


// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';


/* Styles ==================================================================== */
const styles = StyleSheet.create({
  featuredImage: {
    left: 0,
    right: 0,
    height: AppSizes.screen.height * 0.2,
    resizeMode: 'cover',
  },
  container: {
    marginTop: 35,
    marginBottom: 30,
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

/* Component ==================================================================== */
class MeetingView extends Component {
  static componentName = 'MeetingView';

  static propTypes = {
    meeting: PropTypes.shape({
      id: PropTypes.number.isRequired,
      time: PropTypes.string.isRequired,
      person: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      image: PropTypes.string,
      address: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }

  render = () => {
    const { name, address, image } = this.props.meeting.person;
    const { time } = this.props.meeting;

    return (
      <ScrollView style={styles.container}>
        <Spacer size={15} />
        <Card>
        {image !== '' &&
        <Image
        styleName="medium-avatar"
        source={{ uri: image}}
        />

        }
        <Card>
        <Text h2> {time} </Text>
          <Text h2>{name}</Text>
          <Text>{address}</Text>
        </Card>
        <Spacer size={20} />
        </Card>
      </ScrollView>
    );
  }
}

/* Export Component ==================================================================== */
export default MeetingView;
