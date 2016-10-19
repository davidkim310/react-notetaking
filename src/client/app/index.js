import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
    //  stores our text
    this.state = { textAreaVal: '' }
  }
  tab (event) {
    if (event.keyCode === 9) {
      console.log('Tab-key pressed')
    }
  }
  handleChange (event) {
    this.setState({
      textAreaVal: event.target.value
    })
  }
  render () {
    console.log(this.state.textAreaVal)
    return (
      <section className='row'>
        <textarea className='col-md-6 full-height' id='pad' onKeyDown={this.tab} onChange={this.handleChange.bind(this)}>Test code here</textarea>
      </section>
    )
  }
}

render(<App/>, document.getElementById('app'))
