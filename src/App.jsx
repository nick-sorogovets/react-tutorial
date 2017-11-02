import React, { Component } from 'react';
import './App.css';
import News from './News';
import ShoppingList from './ShoppingList';

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
    // author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>News</h3>
        <News data={my_news}/>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;
