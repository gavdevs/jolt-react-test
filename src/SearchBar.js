import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    const { context } = this.props
    console.log(context)
    return (
      <div className='search-bar'>
        <input id="search" onChange={() => context.search(document.getElementById('search').value)} placeholder='Search Your Destiny' />
      </div>
    );
  }
}

export default SearchBar;
