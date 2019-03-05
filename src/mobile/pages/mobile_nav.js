import React from 'react';
import '../assets/mobile_nav.css'
import '../assets/font/iconfont.css'
import {IndexLink} from 'react-router'


export default class Mobile_nav extends React.Component{
    render() {
        return(
            <div className="contain">
            <div className="mobileNav">
                <ul>
                    <li>
                        <IndexLink activeClassName="active"  to={`/`}>
                        <i className="iconfont icon-homepage_fill"></i>推荐
                        </IndexLink>

                    </li>
                    <li>
                        <IndexLink activeClassName="active"  to={`/hot`}>
                        <i className="iconfont icon-manage_fill"></i>热门
                        </IndexLink>
                    </li>
                    <li>
                        <IndexLink activeClassName="active"  to={`/mine`}>
                        <i className="iconfont icon-people_fill"></i>我的
                        </IndexLink>
                    </li>
                </ul>
            </div>
            </div>
        )
    }

}