import React from 'react'
import Nav from  './pages/nav'
import './assets/css/pc_index.css'

export default class PcIndex extends React.Component{
    render(){
        return(
            <div className="container">
                <Nav/>

                <div className="contain">

                    { this.props.children }
                </div>
            </div>

        )
    }
}
