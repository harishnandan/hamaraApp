/**
 * List of Recipes for a Meal Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import * as MeetingActions from '@redux/meetings/actions';

// Components
import Loading from '@components/general/Loading';
import MeetingListingRender from './ListingView';

/* Redux ==================================================================== */
// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  meetings: state.meeting.meeting || [],
});

// Any actions to map to the component?
const mapDispatchToProps = {
  getMeetings: MeetingActions.getMeetings,
};

/* Component ==================================================================== */
class MeetingListing extends Component {
  static componentName = 'MeetingListing';

  static propTypes = {
    meetings: PropTypes.arrayOf(PropTypes.object).isRequired,
    getMeetings: PropTypes.func.isRequired,
  }

  static defaultProps = {
    meetings: [],
  }
  /**
    * Fetch Data from API
    */
  fetchMeetings = () => this.props.getMeetings()
    .then(() => this.setState({ error: null, loading: false }))
    .catch(err => this.setState({ error: err.message, loading: false }))

  render = () => {
    if (this.state.loading) return <Loading />;

    return (
      <MeetingListingRender
        meetings={this.props.meetings}
        reFetch={this.fetchMeetings}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingListing);
