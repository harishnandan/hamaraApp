/**
 * Style Guide
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Consts and Libs
import { AppColors, AppStyles } from '@theme/';

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

import * as PersonActions from '@redux/persons/actions';

const mapStateToProps = state => ({
  doctors: state.persons.doctors || [],
  chemists: state.persons.chemists || [],
});

// Any actions to map to the component?
const mapDispatchToProps = {
  getMeetings: PersonActions.getMeetings,
};

/* Component ==================================================================== */
class PersonListing extends Component {
  static componentName = 'PersonListing';
  static propTypes = {
    doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
    chemists: PropTypes.arrayOf(PropTypes.object).isRequired,
    getMeetings: PropTypes.func,
  }
  static defaultProps = {
    doctors: [],
    chemists: [],
  }

  constructor(props) {
    super(props);

    // Setup ListViews
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const ds2 = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      navigation: {
        index: 0,
        routes: [
          { key: '0', title: 'Doctors' },
          { key: '1', title: 'Chemists' },
        ],
      },
      dataSource: ds.cloneWithRows(this.props.doctors),
      dataSource2: ds2.cloneWithRows(this.props.chemists),
    };
  }

  /**
    * On Change Tab
    */
  handleChangeTab = (index) => {
    this.setState({
      navigation: { ...this.state.navigation, index },
    });
  }

  /**
    * Each List Item
    */
  renderRow = (data, sectionID) => (
    <ListItem
      key={`list-row-${sectionID}`}
      onPress={() => Actions.PersonView({ doctor: data })}
      title={data.name}
      subtitle={data.type}
      leftIcon={data.icon ? { name: data.icon } : null}
      avatar={data.image ? { uri: data.image } : null}
      roundAvatar={!!data.image}
    />
  )

  /**
    * Which component to show
    */
  renderScene = ({ route }) => {
    switch (route.key) {
      case '0' :
        return (
          <View style={styles.tabContainer}>
            <ScrollView
              automaticallyAdjustContentInsets={false}
              style={[AppStyles.container]}
            >
              <List>
                <ListView
                  renderRow={this.renderRow}
                  dataSource={this.state.dataSource}
                />
              </List>
            </ScrollView>
          </View>
        );
      case '1' :
        return (
          <View style={styles.tabContainer}>
            <ScrollView
              automaticallyAdjustContentInsets={false}
              style={[AppStyles.container]}
            >
              <List>
                <ListView
                  renderRow={this.renderRow}
                  dataSource={this.state.dataSource2}
                />
              </List>
            </ScrollView>
          </View>
        );
      default :
        return (
          <View />
        );
    }
  }

  /**
    * Header Component
    */
  renderHeader = props => (
    <TabBar
      {...props}
      style={styles.tabbar}
      indicatorStyle={styles.tabbarIndicator}
      renderLabel={scene => (
        <Text style={[styles.tabbar_text]}>{scene.route.title}</Text>
      )}
    />
  )

  render = () => (
    <TabViewAnimated
      style={[styles.tabContainer]}
      renderScene={this.renderScene}
      renderHeader={this.renderHeader}
      navigationState={this.state.navigation}
      onRequestChangeTab={this.handleChangeTab}
    />
  )
}

/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(PersonListing);
