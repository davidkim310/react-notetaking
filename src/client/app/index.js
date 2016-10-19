import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  tab (event) {
    if (event.keyCode === 9) {
      console.log('Tab-key pressed')
    }
  }
  render () {
    var pad = document.getElementById('pad')
    return (
      <section className='row'>
        <textarea className='col-md-6 full-height' id='pad' onKeyDown={this.tab}>Test code here</textarea>
      </section>
    )
  }
}

render(<App/>, document.getElementById('app'))
