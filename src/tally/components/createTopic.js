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
    this.removeInput = this.removeInput.bind(this);
  }
  handleInputChange(event) {
    const { target } = event;
    if (target.style.display !== 'node') {
      const { value, name } = target;

      this.setState({
        [name]: value,
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.dispatch(createTopic(this.state));
  }

  appendInput() {
    const newInput = `answer-${this.state.inputs.length}`;
    this.setState({ inputs: this.state.inputs.concat([newInput]) });
    // this.setState({ newInput: 0 });
  }

  removeInput(input) {
    const index = input.target.name.split('-');
    const newInput = this.state.inputs;


    newInput[index[1]] = 'deleted';
    this.setState({ inputs: newInput });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} name="createTopic" >
          <input type='text' name='title' id='title' onChange={this.handleInputChange} required />
          {this.state.inputs.map((input, index) => {
            if (input !== 'deleted') {
              return (<div key={input + index}>
                <input type='text' ref={input} key={input} name={input} onChange={this.handleInputChange} required />
                <button key={input + index} type='button' name={input} onClick={this.removeInput}>remove</button>
                </div>);
            }
            return null;
          })}
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
