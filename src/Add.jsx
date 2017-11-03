import React, { Component } from 'react';
import './Add.css';
class Add extends Component {
  state = {
    author: '',
    title: '',
    text: '',
    isValid: false,
  }

  componentDidMount = () => {
    this.refs.author.focus();
  }

  onNewsSubmit = (event) => {
    event.preventDefault();
    this.props.onNewsAdded && this.props.onNewsAdded(this.state);
    this.setState({
      text: '',
      isValid: false,
    });
    this.refs.text.focus();

  }
  onChange = (event) => {
    const field = event._targetInst.ref._stringRef;
    const valid = event.target.form.checkValidity();
    this.setState({
      isValid: valid,
      [field]: event.target.value,
    });
  }

  render() {
    return (
      <form ref='newsForm' className="add cf" onSubmit={this.onNewsSubmit}>
        <div>
          <input
            type="text"
            className="add__author"
            value={this.state.author}
            placeholder="Enter author"
            onChange={this.onChange}
            ref="author"
            required
          />
          <input
            type="text"
            className="add__title"
            value={this.state.title}
            placeholder="Enter title"
            onChange={this.onChange}
            ref='title'
            required
          />
          <br/>
          <textarea
            className="add__text"
            value={this.state.text}
            placeholder="News text"
            onChange={this.onChange}            
            required
            ref='text'
          ></textarea>
        </div>
        <button
          className='add__button'
          type='submit'
          ref='post'
          disabled={!this.state.isValid}
        >Add News</button>
      </form>
    );
  }
}

export default Add;