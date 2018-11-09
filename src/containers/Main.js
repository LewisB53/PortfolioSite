import React, { Component } from 'react';
import Layout from '../hoc/Layout/Layout';
import Gallery from '../components/Gallery/Gallery';
import SocialMediaBar from '../components/SocialMediaBar/SocialMediaBar'
import Demo from '../components/ShareButtons/ShareButtons'



class Main extends Component {

    state = {
        orders: [],
        loading: true
    }


    render () {
        return (
            <div>
                    <Layout/>
                    <SocialMediaBar/>
                    <Gallery> {this.state.imgUrls}</Gallery>
                    <Demo/>
            </div>
        );
    }
}

export default Main;