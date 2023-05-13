import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onCounted = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="middle-container">
          <h1 className="head">
            The button has been clicked
            <span className="spanelement"> {count}</span> Times
          </h1>
          <p className="para">Click the button to increase the count</p>
          <button onClick={this.onCounted} className="btn" type="button">
            Click me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
