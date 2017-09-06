import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTopic } from '../actions/topics';

class CreateTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      inputs: ['answer-0', 'answer-1'],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.appendInput = this.appendInput.bind(this);
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

  appendInput() {
    const newInput = `answer-${this.state.inputs.length}`;
    this.setState({ inputs: this.state.inputs.concat([newInput]) });
    this.setState({ newInput: 0 });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='title' id='title' onChange={this.handleInputChange} />
          {this.state.inputs.map(input => <input type='text' key={input} name={input} required onChange={this.handleInputChange} />)}
          <button type='button' onClick={this.appendInput}>Add Answer</button>
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
