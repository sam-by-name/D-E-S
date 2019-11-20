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
      <Gallery margin={1} columns={10} photos={PHOTOS} />
    )  
  }
}

export default Examples

const PHOTOS = [
  {
    src: '/images/dandy.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/dandyDraw.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/dandyCon.jpg',
    width: 4,
    height: 4,
    // margin: 100
  },
  {
    src: '/images/dandy.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/dandy.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/dandyDraw.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/dandyCon.jpg',
    width: 4,
    height: 4,
    // margin: 100
  },
  {
    src: '/images/dandy.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/dandy.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/dandyDraw.jpg',
    width: 4,
    height: 3
  },
  {
    src: '/images/dandyCon.jpg',
    width: 4,
    height: 4,
    // margin: 100
  },
  {
    src: '/images/dandy.jpg',
    width: 4,
    height: 3
  },

]