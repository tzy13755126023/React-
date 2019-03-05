import React from "react"
import "../assets/css/newpic.css"

export default class NewPic extends React.Component{
  render(){
    return(
      <div className="new-pic">
        <a href={ this.props.url }>
          <img src={ this.props.imgurl } />
          <a className="text">{ this.props.title }</a>
        </a>
      </div>
    )
  }
}
