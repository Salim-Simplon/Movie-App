import React, { Component } from 'react'
import Foot from './Footer/Footer'
import Contact from './Contact/Contact'

export class Inscription extends Component {
    render() {
        return (
            <div>
                <Contact />
                <Foot />
            </div>
        )
    }
}

export default Inscription
