import React, { Component } from 'react';
import Gallery from '../components/Gallery/Gallery';
import SocialMediaBar from '../components/SocialMediaBar/SocialMediaBar'




class GalleryContainer extends Component {

    state = {
        loading: true
    }


    render () {
        return (
            <div>
                 <SocialMediaBar/>
                    <Gallery> {this.state.imgUrls}</Gallery>
           

            </div>
        );
    }
}

export default GalleryContainer;