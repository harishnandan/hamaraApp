/**
Individual Meeeting cards!!
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// Actions
import * as MeetingActions from '@redux/meetings/actions';

// Components
import RecipeCardRender from './CardView';

/* Redux ==================================================================== */
// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  reschedule: MeetingActions.reschedule,
  checkIn: MeetingActions.checkIn,
};

/* Component ==================================================================== */
class MeetingCard extends Component {
  static componentName = 'MeetingCard';

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
    reshedule: PropTypes.func,
    checkIn: PropTypes.func,
  }

  static defaultProps = {
    time: Date.now(),
    person: null,
  }

  constructor(props) {
    super(props);
    this.state = { meeting: props.meeting };
  }

  componentWillReceiveProps(props) {
    if (props.meeting) {
      this.setState({ meeting: props.meeting });
    }
  }

  /**
    * On Press of Card
    */
// TODO:add on press event here

  onPressCard = () => {
    Actions.meetingView({
      meeting: this.props.meeting
    });
  }


  render = () => {
    const { meeting } = this.state;
    const { user } = this.props;

    return (
      <RecipeCardRender
        title={meeting.person.name}
        body={meeting.time}
        image={meeting.person.image}
        onPress={this.onPressCard}
      />
    );
  }
}

/* Export Component ==================================================================== */
export default connect(mapStateToProps, mapDispatchToProps)(MeetingCard);
