import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Header'
import ListItem from './ListItem'

const data = [
  {
    title: 'hej',
    id: 1
  },
  {
    title: 'hej',
    id: 2
  },
  {
    title: 'hej',
    id: 3
  },
  {
    title: 'hej',
    id: 4
  }
]
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Hello World',
      number: 0
    }
  }

  handleInput = e => {
    this.setState({
      title: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <input type="text" onChange={this.handleInput} />
        <ul>
          {data.map(x => (
            <ListItem key={x.id} {...x} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
