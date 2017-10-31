import React, { Component } from 'react';
import {
  View,
  Alert,
  ListView,
  TextInput,
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
  Card,
  Spacer,
  List,
  Text,
  ListItem,
  FormInput,
  FormLabel,
} from '@components/ui/';
import { Button } from '@shoutem/ui'

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  // Tab Styles
  tabContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'flex-start',
    marginTop:60,
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

class ProductsListing extends Component {
  static componentName = 'ProductsListing';
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  static defaultProps = {
    products: [],
  }

  constructor(props) {
    super(props);

    // Setup ListViews
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.products)
  }
}
  /**
    * Each List Item
    */
  renderRow(data){
    return(
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',paddingRight:10,paddingLeft:10}}>
      <Text h2 style={{flex:2}}>{data.name}</Text>
      <Text h2 style={{flex:1}}>{data.target}</Text>
      <Text h2 style={{flex:1}} >{data.given} </Text>
      <TextInput
      style={{flex:1}}
      keyboardType={"numeric"}
      placeholder={"Quantity"}
      />
      </View>
    );

  }
renderHeader(){
  return(
    <View style={{flex:1,flexDirection: 'row', justifyContent: 'space-between',paddingRight:10,paddingLeft:10}}>
      <Text h2 style={{flex:2}}>Name</Text>
      <Text h2 style={{flex:1}}>Target</Text>
      <Text h2 style={{flex:1}}>Given</Text>
      <Text h2 style={{flex:1}}>Quantity</Text>
      </View>
    );
}
  render(){
    return (
      <View style={styles.tabContainer}>
        <ScrollView >

            <ListView
              renderHeader={this.renderHeader}
              renderRow={this.renderRow}
              dataSource={this.state.dataSource}
            />
            <TextInput
            placeholder={"Remarks"}
            />

          <Button styleName="confirmation dark">
           <Text h1>Submit </Text>
          </Button>
        </ScrollView>


      </View>
    );
  }
}

export default ProductsListing;
