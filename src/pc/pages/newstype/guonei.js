import React from "react";
import NewPic from "../../component/newpic";
import { httpGet } from "../../../http/http";

export default class Guonei extends React.Component{

    constructor(){
        super();
        this.state = {
            news:{
                result:{
                    data:[]
                }
            }
        }
    }

    componentDidMount(){
        httpGet("http://www.wwtliu.com/sxtstu/news/juhenews.php?type=top&count=30")
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({
                    news:data
                })
            })
    }

    render(){
        return(
            <div className="container">
                {/*{*/}
                    {/*this.state.news.result.data.map((ele,index) =>{*/}
                        {/*return <NewPic url={ele.url} imgurl={ele.thumbnail_pic_s} title={ele.title} />*/}
                    {/*})*/}
                {/*}*/}
                zheshiguonei
            </div>
        )
    }
}
