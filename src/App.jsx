import React, { Component } from 'react';
import './App.css';
import News from './News';
import Add from './Add';

const my_news = [
  {
    author: 'Саша Печкин',
    title: 'В четчерг, четвертого числа...',
    text: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    title: 'Считаю, что $ должен стоить 35 рублей!',
    text: 'А евро 42!'
  },
  {
    author: 'Гость',
    title: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    text: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

class App extends Component {
  state = {
    news: my_news
  }
  NewsAdded = (data) => {
    const news = this.state.news;
    const { author, title, text} = data;
    news.push({
      author,
      title,
      text,
    });
    this.setState({ news })
  }
  NewsDeleted = (index) => {
    const news = this.state.news;
    news.splice(index, 1);
    this.setState({ news });
  }
  render() {
    return (
      <div className="App">
        <Add onNewsAdded={this.NewsAdded} />
        <h3>News</h3>
        <News data={this.state.news} onDelete={this.NewsDeleted} />
      </div>
    );
  }
}

export default App;
