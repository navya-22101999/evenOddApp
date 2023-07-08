// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: true, count: 0}

  increament = () => {
    this.setState(prevState => {
      const {count} = prevState
      const num = count + Math.ceil(Math.random() * 100)
      let numType
      if (num % 2 === 0) {
        numType = true
      } else {
        numType = false
      }
      return {isEven: numType, count: num}
    })
  }

  render() {
    const {isEven, count} = this.state
    const message = isEven ? 'Even' : 'Odd'
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="count">Count {count}</h1>
          <p className="count-even">Count is {message}</p>
          <button className="button" type="button" onClick={this.increament}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
