// Component for gallery
import React, { Component } from 'react';
import GalleryImage from './GalleryImage';
import GalleryContainer from '../../containers/GalleryContainer';
import GalleryModal from './GalleryModal';
import classes from './Gallery.css';


// Cache gallery container
class Gallery extends Component{



// Create new array with URLs for images

    constructor(props) {
      super(props);
     
      
      this.state = {
  
        url: ''
      }


    }
    
    render() {
      let imgUrls = [
        'https://source.unsplash.com/3Z70SDuYs5g/800x600',
        'https://source.unsplash.com/01vFmYAOqQ0/800x600',
        'https://source.unsplash.com/2Bjq3A7rGn4/800x600',
        'https://source.unsplash.com/t20pc32VbrU/800x600',
        'https://source.unsplash.com/pHANr-CpbYM/800x600',
        'https://source.unsplash.com/3PmwYw2uErY/800x600',
        'https://source.unsplash.com/uOi3lg8fGl4/800x600',
        'https://source.unsplash.com/CwkiN6_qpDI/800x600',
        'https://source.unsplash.com/9O1oQ9SzQZQ/800x600',
        'https://source.unsplash.com/E4944K_4SvI/800x600',
        'https://source.unsplash.com/-hI5dX2ObAs/800x600',
        'https://source.unsplash.com/vZlTg_McCDo/800x600'
      ]
      
      return(
        <div>
          <a>Gallery - Click For full list</a>
          <div className ={classes.Row} >
            {
              imgUrls.map((url, index) => {
                 return <div className= {classes.Column}>
                   
                      <GalleryImage src={url} alt={'Image number ' + (index + 1)} />
                   
                  </div>
               })
             }
          </div>
        </div>  
       
      )
    }
    
  }
  
  export default Gallery;