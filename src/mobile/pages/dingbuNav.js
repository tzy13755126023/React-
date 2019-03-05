import React from 'react';
import { Menu, Icon,Tabs,Form,Input, Button,Modal,message} from 'antd';
import {Link} from 'react-router';
const TabPane = Tabs.TabPane;

export default class DingbuNav extends React.Component{
    constructor(){
        super();
        this.state={
            current: 'yule2',
            isLogin:false,
            visible:false,
            username:"",
            loginStatus:"1"
        }
    }
    //点击哪个菜单 哪个就高亮显示
    handleClick(event){
        this.setState({
            current: event.key,
        })
        if(event.key=="register"){
            this.setState({
                visible:true
            })
        }
    }
    render() {
        return(
            <div>
                    <Menu onClick={this.handleClick.bind(this)} mode="horizontal" selectedKeys={[this.state.current]}>
                        <Menu.Item key="yule2">
                            <Link to={`/yule2`}><Icon type="area-chart" />娱乐</Link>
                        </Menu.Item>
                        <Menu.Item key="junshi2">
                            <Link to={`/junshi2`}><Icon type="snippets" />军事</Link>
                        </Menu.Item>
                        <Menu.Item key="guoji2">
                            <Link to={`/guoji2`}><Icon type="bar-chart" />国际</Link>
                        </Menu.Item>
                        <Menu.Item key="guonei2">
                            <Link to={`/guonei2`}><Icon type="pie-chart" />国内</Link>
                        </Menu.Item>
                    </Menu>
            </div>
        )
    }

}