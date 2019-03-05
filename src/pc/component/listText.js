import React from 'react';
import {httpGet} from '../../http/http'
import '../assets/css/index.css'

export default class ListText extends React.Component{
    constructor(){
        super();
        this.state={
           news:{
               result:{
                   data:[]
               }
           }
        }
    }
    componentDidMount() {
        httpGet("http://www.wwtliu.com/sxtstu/news/juhenews.php?type=" + this.props.type + "&count=10")
            .then(res =>{
                return res.json();
            }).then(data =>{
                this.setState({
                    news:data,
                })
        })
    }

    render() {
        return(
            <div className="left">
                <ul>
                    {
                        this.state.news.result.data.map(function (ele,index) {
                            return(
                               <li key={index}><a href={ ele.url }>{ ele.title }</a></li>
                            )
                        })
                    }
                </ul>
            </div>

        )
    }

}