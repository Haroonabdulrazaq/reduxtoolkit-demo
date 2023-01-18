import React, { Component } from 'react'

class ClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter: 0
    }
  }
  incrementCount =()=>{
    this.setState((prevState)=>({
        counter: prevState.counter + 1
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count {this.state.counter}</button>
      </div>
    )
  }
}

export default ClassCounter