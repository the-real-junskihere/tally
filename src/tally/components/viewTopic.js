import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getTopic } from '../actions/topics';

class ViewTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  componentWillMount() {
    const topicId = this.props.match.params.id;
    if (!topicId) {
      throw new Error('no topic id');
    }

    this.props.dispatch(getTopic(topicId));
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.topic.title === '') {
      this.setState({ redirect: true });
    }
  }

  render() {
    return (
      <div>
        {
          this.state.redirect ? (<Redirect to={{ pathname: '/404' }} />) : (null)
        }
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
