// Component for gallery modal
import React, { Component } from 'react';

class GalleryModal extends Component {
    render() {
      if (this.props.isOpen === false) {
        return null;
      }
      
      return(
        <div isOpen={this.props.isOpen} className='modalOverlay' onClick={this.props.onClick} name={this.props.name}>
          <div className='modalBody'>
            <a className='modalClose' href='#' onClick={this.props.onClick}><span className='modalBody'></span></a>
            
            <img src={this.props.src} />
          </div>
        </div>
      )
    }
  }

  export default GalleryModal;