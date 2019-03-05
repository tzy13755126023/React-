import React,{Component} from 'react';
import TextList from '../../component/listText'
import { Carousel  } from "antd"
import "../../assets/css/index.css"


export default class Index extends Component{
    render() {
        return(
            <div className="container">
                <div className="right">
                    <img src={require('../../assets/images/04.jpg')} />
                </div>
                {/*<TextList type="top" />*/}
                <div className="clear_float">
                <Carousel>
                    <div><img src={require('../../assets/images/05.jpg')} /></div>
                    <div><img src={require('../../assets/images/02.jpg')} /></div>
                    <div><img src={require('../../assets/images/03.jpg')} /></div>
                    <div><img src={require('../../assets/images/01.jpg')} /></div>
                </Carousel>
                </div>
            </div>
        )
    }
}
