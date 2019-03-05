import React from "react"
import Mobile_nav from './pages/mobile_nav';
import DingbuNav from './pages/dingbuNav'

export default class MobileIndex extends React.Component{
    render(){
        return(
            <div>
            <DingbuNav/>
                <Mobile_nav/>

                {this.props.children}

            </div>
        )
    }
}
