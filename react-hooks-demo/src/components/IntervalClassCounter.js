import React, { Component } from 'react'

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  componentDidMount(){
    this.intervals = setInterval(this.tick, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervals)
  }
  
  tick=()=>{
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>{this.state.count}</div>
    )
  }
}

export default IntervalClassCounter