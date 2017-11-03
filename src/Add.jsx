import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Add.css';
class TestInput extends Component {
  constructor(props) {
    super(props);
    this.onNewsSubmit = this.onNewsSubmit.bind(this);
  }
  state = {
    author: '',
    title: '',
    text: '',
    isValid: false,
  }

  componentDidMount = () => {
    ReactDOM.findDOMNode(this.refs.author).focus();
  }

  onNewsSubmit = (e) => {
    e.preventDefault();
    this.props.onNewsAdded(this.state);
    this.setState({
      text: '',
      isValid: false,
    });

  }
  onChange = (field, e) => {
    const valid = e.target.form.checkValidity();
    this.setState({
      isValid: valid,
      [field]: e.target.value,
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
            onChange={this.onChange.bind(this, 'author')}
            ref="author"
            required
          />
          <input
            type="text"
            className="add__title"
            value={this.state.title}
            placeholder="Enter title"
            onChange={this.onChange.bind(this, 'title')}
            ref='title'
            required
          />
          <br/>
          <textarea
            className="add__text"
            value={this.state.text}
            placeholder="News text"
            onChange={this.onChange.bind(this, 'text')}
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

export default TestInput;