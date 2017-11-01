import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';
import ShoppingList from './ShoppingList';

const my_news = [];
// const my_news = [
//     {
//         author: 'Саша Печкин',
//         text: 'В четверг, четвертого числа...'
//     },
//     {
//         author: 'Просто Вася',
//         text: 'Считаю, что $ должен стоить 35 рублей!'
//     },
//     {
//         author: 'Гость',
//         text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
//     }
// ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <News data={my_news}/>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;
