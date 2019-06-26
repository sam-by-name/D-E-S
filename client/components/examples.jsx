import React from 'react'

class Examples extends component {
  constructor (props) {
    super(props) 
    this.state = {
      onDisplay: 'true'
    }
  }
  render () {
    return (
      <Fragment>
        <div>
          I am example number one
        </div>
      </Fragment>
    )  
  }
}

export default Examples