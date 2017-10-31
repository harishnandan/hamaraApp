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
import * as PersonActions from '@redux/persons/actions';
const mapStateToProps = state => ({
  doctors: state.persons.doctors || [],
});

// Any actions to map to the component?
const mapDispatchToProps = {
  getMeetings: PersonActions.getMeetings,
};

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
    marginTop:35,
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

class DoctorListing extends Component {
  static componentName = 'DoctorListing';
  static propTypes = {
    doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
    set: PropTypes.number,
    ids: PropTypes.arrayOf(PropTypes.number),
  }
  static defaultProps = {
    set: 0,
    ids: [],
  }

  constructor(props) {
    super(props);
    console.log(props.set);
    // Setup ListViews
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    if(props.set==0 && props.ids.length!=0){
      var data= this.props.doctors.filter(function(word){
           return props.ids.includes(word.set); }
         );
    } else {
    var data= this.props.doctors.filter(function(word){
         return word.set == props.set; }
       );
     }
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  // ComponentWillMount() {
  //
  //   // Setup ListViews
  //   const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  //
  //   if(this.props.ids.length===0 && this.props.set!=0){
  //     const data= this.props.doctors.filter(function(word){
  //     return word.set == this.props.set;
  //       });
  //   this.state ({
  //
  //     dataSource: ds.cloneWithRows(data)
  //   })
  // }else if(this.props.ids.length!==0 && this.props.set===0){
  //     const data= this.props.doctors.filter(function(word){
  //     return this.props.ids.includes(word.id);
  //     });
  //     this.setState({
  //
  //       dataSource: ds.cloneWithRows(data)
  //     });
  //   }else {
  //     this.setState({
  //
  //        dataSource: ds.cloneWithRows(this.props.doctors)
  //     });
  //   }
  // }


  /**
    * Each List Item
    */
  renderRow = (data, sectionID) => (
    <ListItem
      key={`list-row-${sectionID}`}
      onPress={() => Actions.PersonView({ doctor: data })}
      title={data.name}
      subtitle={'Doctor'}
      leftIcon={data.icon ? { name: data.icon } : null}
      avatar={data.image ? { uri: data.image } : null}
      roundAvatar={!!data.image}
    />
  )


  render(){
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorListing);
