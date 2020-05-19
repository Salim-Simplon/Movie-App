import React, { Component } from 'react'
import SimpleSlider from './Carousel/Carousel'
import Foot from './Footer/Footer'

export class Accueil extends Component {
    render() {
        return (
            <div>
                <SimpleSlider />
                <Foot />
            </div>
        )
    }
}

export default Accueil
