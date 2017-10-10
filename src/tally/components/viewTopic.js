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
    const { dispatch, match } = this.props;
    const topicId = match.params.id;
    if (!topicId) {
      throw new Error('no topic id');
    }
    dispatch(getTopic(topicId));
  }

  componentWillReceiveProps(nextProps) {
    const { topic } = nextProps;
    if (topic.title === '') {
      this.setState({ redirect: true });
    }
  }

  render() {
    const { redirect } = this.state;
    const { topic } = this.props;
    return (
      <div>
        {
          redirect ? (<Redirect to={{ pathname: '/404' }} />) : (null)
        }
        <div className='container'>
          <h1>{topic.title}</h1>
          <img className="responsive-img" src={topic.imageUrl} alt='what?' />
          <div className='row'>
            {topic.answersOptions ?
              topic.answersOptions.map((option) => {
                return <p>
                      <input name="group1" type="radio" id={option} />
                      <label for={option}>{option}</label>
                  </p>;
              }) : null
            }
          </div>
        </div>
      </div>
    );
  }
}


export default connect((state) => {
  return {
    topic: state.topicsReducer.topic,
  };
})(ViewTopic);
