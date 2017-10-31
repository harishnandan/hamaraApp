import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import Timeline from 'react-native-timeline-listview';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Alerts,
  Button,
  Card,
  Spacer,
  List,
  ListItem,
} from '@components/ui/';

// Actions
import * as MeetingActions from '@redux/meetings/actions';

const mapStateToProps = state => ({
  data: state.meeting.meeting || [],

});

// Any actions to map to the component?
const mapDispatchToProps = {
  getMeetings: MeetingActions.getMeetings,
};

 class MyTimeline extends Component {
  static componentName = 'MyTimeline';
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    getMeetings: PropTypes.func.isRequired,
  }

  static defaultProps = {
    data: []
  }
  constructor(){
    super();
    this.onEventPress = this.onEventPress.bind(this);
    this.renderSelected = this.renderSelected.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
    this.state = {
      selected: null};
  }


  onEventPress(data){
    this.setState({selected: data});
    switch (data.target) {
      case 'Set 1':
      Actions.DoctorListing({set:1, title: "Set 1" });
      break;
      case 'Set 2':
      Actions.DoctorListing({ set:2, title: "Set 2" });
      break;
      case 'Holiday':
      Alert.alert('Happy Holiday! Enjoy Your Day :)');
      break;
      default:
      Alert.alert('Go to the Meeting!');
    }
  }

  renderSelected(){
      if(this.state.selected)
        return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
  }

  renderDetail(rowData, sectionID, rowID) {
    let title = <Text style={[styles.title]}>{rowData.target}</Text>

    return (
      <View style={{flex:1}}>
        {title}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Timeline
          style={styles.list}
          data={this.props.data}
          circleSize={20}
          innerCircle={'dot'}
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: 5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13,width:120}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          onEventPress={this.onEventPress}
          renderDetail={this.renderDetail}
        />
          <Spacer size={15} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 10,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    marginTop: 20,
    paddingTop:10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingRight: 50
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyTimeline);
