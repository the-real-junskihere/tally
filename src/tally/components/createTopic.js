import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTopic } from '../actions/topics';

class CreateTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      answer1: null,
      answer2: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;


    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(createTopic(this.state));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='title' id='title' onChange={this.handleInputChange} />
          <input type='text' name='answer1' id='answer1' onChange={this.handleInputChange} />
          <input type='text' name='answer2' id='answer2' onChange={this.handleInputChange} />
          <button type='submit'>Create</button>
          <button type='reset'>Reset</button>
        </form>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    topic: state.topicsReducer.topic,
  };
})(CreateTopic);
