import React, { Component } from 'react'
import Foot from './Footer/Footer'
import Mov from './Nos Valeur/Movies'

export class Films extends Component {
    render() {
        return (
            <div>
                <Mov />
                <Foot />
            </div>
        )
    }
}

export default Films
