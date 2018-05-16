import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';
import SearchBar from "./SearchBar.js"
import star from './images/star.svg';
import wars from './images/wars.svg';
import { Context } from './context'

class App extends Component {
  render() {
    return (
      <div className='content'>
        <div className='logo'>
          <img src={star} alt="star-logo" />
          <span className='interview-text'>The Interview</span>
          <img src={wars} alt="wars-logo" />
        </div>

        <Context.Consumer>
          {context => {
            console.log(context)
            return (
              <div>
                <SearchBar context={context} />
                <Card context={context} />
              </div>
            )
          }}
        </Context.Consumer>
      </div>
    )
  }
}

export default App;
