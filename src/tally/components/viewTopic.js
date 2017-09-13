import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopic } from '../actions/topics';

class ViewTopic extends Component {
  componentWillMount() {
    const topicId = this.props.match.params.id;
    if (!topicId) {
      throw new Error('No topic Id');
    }

    this.props.dispatch(getTopic(topicId));
  }

  render() {
    return (
      <div>
        <h1>View Topic</h1>
      </div>
    );
  }
}


export default connect((state) => {
  return {
    topic: state.topicsReducer.topic,
  };
})(ViewTopic);
