import React, { Component } from 'react'
import Foot from './Footer/Footer'
import Favoris from './Favoris/Favoris'

export class Favmovies extends Component {
    render() {
        return (
            <div>
                <Favoris />
                <Foot />
            </div>
        )
    }
}

export default Favmovies
