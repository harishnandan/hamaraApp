// utils view : Add new doctor , edit profile etc


import React, { Component } from 'react';
import {
  View,
  Alert,
  ListView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import { SocialIcon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';

// Components
import {
  Alerts,
  Button,
  Card,
  Spacer,
  Text,
  List,
  ListItem,
  FormInput,
  FormLabel,
} from '@components/ui/';

// Example Data
const dummyData1 = [
  { title: 'Settings', icon: 'build' },
  { title: 'Alarms', icon: 'alarm' },
  { title: 'Cards', icon: 'card-membership' },
  { title: 'Favourites', icon: 'grade' },
  { title: 'Help', icon: 'help' },
];

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: AppColors.brand.primary,
  },
  tabbarIndicator: {
    backgroundColor: '#FFF',
  },
  tabbar_text: {
    color: '#FFF',
  },
});


export default class utils extends Component {
  static componentName = 'utils';

    // Setup ListViews
  render(){
        return (
          <View style={styles.tabContainer}>
            <ScrollView
              automaticallyAdjustContentInsets={false}
              style={[AppStyles.container]}
            >
              <Card >
                <View>
                  <Button
                    large
                    title={'Add New'}
                    onPress={Actions.AddNew}
                  />
                  <Spacer size={10} />

                  <Button
                    large
                    title={'My Profile'}
                    backgroundColor={'#33BB76'}
                    icon={{ name: 'code' }}
                    onPress={Actions.comingSoon}
                  />
                  <Spacer size={10} />

                  <Button
                    large
                    title={'Settings'}
                    onPress={Actions.comingSoon}
                  />
                  <Spacer size={10} />

                  <Button
                    large
                    title={'Upload a file'}
                    backgroundColor={'#FB6567'}
                    onPress={Actions.comingSoon}
                  />
                  <Spacer size={10} />
                  <Button
                    large
                    title={'Help'}
                    backgroundColor={'#FB6567'}
                    onPress={Actions.comingSoon}
                  />
                  <Spacer size={10} />
                  <Button
                    large
                    title={'About'}
                    backgroundColor={'#FB6567'}
                    onPress={Actions.comingSoon}
                  />
                  <Spacer size={10} />
                </View>
              </Card>

              <Spacer size={20} />

            </ScrollView>
          </View>
        );

    }
  }
