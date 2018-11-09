import React, { Component } from 'react';
import Layout from '../hoc/Layout/Layout';
import Gallery from '../components/Gallery/Gallery';


class Main extends Component {

    state = {
        orders: [],
        loading: true
    }


    render () {
        return (
            <div>
                    <Layout/>
                    <Gallery> {this.state.imgUrls}</Gallery>
            </div>
        );
    }
}

export default Main;