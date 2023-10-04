// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isStatus: 'Subscribe'}

  onSubscribe = () => {
    const {isStatus} = this.state
    if (isStatus === 'Subscribe') {
      this.setState(prevState => ({isStatus: 'Subscribed'}))
    } else {
      this.setState(prevState => ({isStatus: 'Subscribe'}))
    }
  }

  render() {
    const {isStatus} = this.state
    return (
      <div className="sub-bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="btn" onClick={this.onSubscribe}>
          {isStatus}
        </button>
      </div>
    )
  }
}

export default Welcome
