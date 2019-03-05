import React,{Component} from 'react';
import TextList from '../../component/listText'
import "../../assets/css/index.css"
import { Carousel  } from "antd"



export default class Yule extends Component{
        render() {
            return(
                    <div className="container">
                        <div className="right">
                            <img src={require('../../assets/images/01.jpg')} />
                        </div>
                        {/*<TextList type="yule"/>*/}
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
