import React, { Component } from 'react';
// installed axios for fetching data
import axios from 'axios';

import './App.css';
import Card from './Card.js';
import SearchBar from "./SearchBar.js"
import star from './images/star.svg';
import wars from './images/wars.svg';
import { Context } from './context'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { planets: [] }
  }

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
                <Card planets={this.state.planets} context={context} />
              </div>
            )
          }}
        </Context.Consumer>
      </div>
    );
  }

  componentDidMount() {
    axios('http://localhost:3008/planets')
        .then((res) => {
          this.setState ({ planets: res.data })
        })
  }
}

export default App;
