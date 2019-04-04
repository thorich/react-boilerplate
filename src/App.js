import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Header'
import ListItem from './ListItem'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Hello World',
      persons: []
    }
    this.handleResponse = this.handleResponse.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    console.log(event.target.value)
    this.setState({
      title: event.target.value
    })
  }

  handleResponse(data) {
    this.setState({
      persons: data
    })
  }

  componentDidMount() {
    const handleRes = this.handleResponse
    fetch('http://5c9e09de595c55001487be13.mockapi.io/api/v1/persons')
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        handleRes(data)
      })
  }

  componentDidUpdate() {
    console.log('component did update', { persons: this.state.persons })
  }

  render() {
    const { persons } = this.state
    return (
      <div className="App">
        <Header title={this.state.title} />
        <input type="text" onChange={this.handleInput} />
        <ul className="persons">
          {persons.map(function(person) {
            return <ListItem key={person.id} {...person} />
          })}
        </ul>
      </div>
    )
  }
}

export default App
