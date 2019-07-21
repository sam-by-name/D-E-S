import React, {Fragment, Component} from 'react'
import Gallery from 'react-photo-gallery';

class Examples extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      onDisplay: 'true'
    }
  }
  render () {
    return (
          <Gallery margin={10} columns={3} photos={PHOTOS} />
      // <Fragment>
      //   <div className='examplesCont'>
      //     {/* I am example number one */}
      //   </div>
      // </Fragment>
    )  
  }
}

export default Examples

const PHOTOS = [
  {
    src: '/images/dandy.jpg',
    width: 480,
    hight: 360
  },
  {
    src: '/images/dandyDraw.jpg',
    width: 4,
    hight: 4
  },
  {
    src: '/images/dandyCon.jpg',
    width: 4,
    hight: 4,
    margin: 100
  },
  {
    src: '/images/dandy.jpg',
    width: 4,
    hight: 4
  },

]