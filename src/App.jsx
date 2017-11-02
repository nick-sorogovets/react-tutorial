import React, { Component } from 'react';
import './App.css';
import News from './News';
import ShoppingList from './ShoppingList';
import Add from './Add';

// const my_news = [];
const my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

class App extends Component {
  state = {
    news: my_news
  }
  NewsAdded = (data) => {
    const updateNews = this.state.news;
    updateNews.push({
      author: data.author,
      text: data.text,
    });
    this.setState({ news: updateNews })
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
        <ShoppingList />
      </div>
    );
  }
}

export default App;
