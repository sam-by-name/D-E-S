import React, {Fragment, Component} from 'react'

class Examples extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      onDisplay: 'true'
    }
  }
  render () {
    return (
      <Fragment>
        <div className='examplesCont'>
          I am example number one
        </div>
      </Fragment>
    )  
  }
}

export default Examples