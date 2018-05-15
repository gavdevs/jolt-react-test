import React from 'react'
import axios from 'axios'

export const Context = React.createContext()

export class Provider extends React.Component {
  constructor() {
    super()

    this.state = {
      currentPage : 1,
      pages: 0,
      query: '',
      people: [],
      pageChange: (data) => {
        this.setState({ currentPage: data.selected + 1 }, this.getPeople)
      },
      search: (search) => {
        this.setState({ query: search }, this.searchPeople)
      }
    }
  }

  render() {
    return (
      <Context.Provider value={ this.state }>
        {this.props.children}
      </Context.Provider>
    )
  }

  componentDidMount() {
    this.getPeople()
    this.getPageAmount()
  } 

  getPeople() {
    axios.get(`http://localhost:3008/people?_page=${this.state.currentPage}`)
      .then((res) => {
        this.setState ({ people: res.data })
      })
  }

  searchPeople() {
    axios.get(`http://localhost:3008/people?q=${this.state.query}`)
      .then((res) => {
        this.setState ({ people: res.data })
        this.getPageAmount()
      })

  }

  getPageAmount() {
    axios.get(`http://localhost:3008/people?q=${this.state.query}`)
      .then (res => {
        this.setState({pages: Math.ceil(res.data.length / 10)})
      })
  }
}
