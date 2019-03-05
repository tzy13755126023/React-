import React from 'react';
import { Menu, Icon,Tabs,Form,Input, Button,Modal,message} from 'antd';
import '../assets/css/nav.css'
import {Link} from 'react-router';
const TabPane = Tabs.TabPane;
import {httpPost} from '../../http/http';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class Nav extends React.Component{
    constructor(){
        super();
        this.state={
            current: 'index',
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
    // 关闭模态框
    handleOk(){
        this.setState({
            visible: false,
        });
    }
    // 关闭模态框
    handleCancel(){
        this.setState({
            visible: false,
        });
    }
    // 登录与注册的切换
    changesTag(key){
        if (key==1){
            // console.log('登录')
            this.setState({
                loginStatus:"1"
            })
        }else{
            // console.log('zhuce');
            this.setState({
                loginStatus:"2"
            })
        }
    }
    componentWillMount() {
        if (localStorage.getItem("username")) {
            this.setState({
                isLogin:true,
                username:localStorage.getItem("username")
            })
        }
    }

    tuichuClick(){
        localStorage.removeItem("username");
        this.setState({
            isLogin:false,

        })
    }
    //提交表单事件
    handleSubmit(e){
        e.preventDefault();   //组织默认跳转
        var formData = this.props.form.getFieldsValue();
        if (this.state.loginStatus==1) {
            //登录
            httpPost("http://localhost:3000/login",{
                username:formData.userName,
                password:formData.password,
            }).then(res =>{
                return res.json();
            }).then(data =>{
                if (data.length!=0) {
                    this.writeUserInfo(data[0].username);
                }
                this.setState({
                    visible:false,
                    isLogin:true,
                    username:data[0].username
                })
            })
        }else{
            //注册
            httpPost("http://localhost:3000/register",{
                username:formData.regUserName,
                password:formData.regPassword,
            }).then(res =>{
                return res.json();
            }).then(data => {
                if (data.msg=='success') {
                    this.writeUserInfo(formData.regUserName);
                    this.setState({
                        visible:false,
                        isLogin:true,
                        username:formData.regUserName
                    })
                    message.info('注册成功!');
                }
            })
        }
        // console.log('Received values of form: ',formData);
    }

    // 写入到本地数据中
    writeUserInfo(username){
        localStorage.setItem("username",username);
    }
    render() {
        const { getFieldDecorator } = this.props.form;



        var loginView = this.state.isLogin?
            <Menu.Item className="isLogin" key="login">
                <Button type="primary">{this.state.username}</Button>
                <Button><Link to={`/center`}>个人中心</Link></Button>
                <Button onClick={this.tuichuClick.bind(this)} type="primary">退出</Button>
            </Menu.Item>
            :
            <Menu.Item className="isLogin" key="register">
                登录||注册
            </Menu.Item>
        return(
            <div className="nav">
                <Menu onClick={this.handleClick.bind(this)} mode="horizontal" selectedKeys={[this.state.current]}>
                    <Menu.Item key="index">
                        <Link to={`/`}><Icon type="home" />首页</Link>
                    </Menu.Item>
                    <Menu.Item key="yule">
                        <Link to={`/yule`}><Icon type="area-chart" />娱乐</Link>
                    </Menu.Item>
                    <Menu.Item key="tiyu">
                        <Link to={`/tiyu`}><Icon type="fund" />体育</Link>
                    </Menu.Item>
                    <Menu.Item key="junshi">
                        <Link to={`/junshi`}><Icon type="snippets" />军事</Link>
                    </Menu.Item>
                    <Menu.Item key="guoji">
                        <Link to={`/guoji`}><Icon type="bar-chart" />国际</Link>
                    </Menu.Item>
                    <Menu.Item key="guonei">
                        <Link to={`/guonei`}><Icon type="pie-chart" />国内</Link>
                    </Menu.Item>
                    { loginView }
                </Menu>

                {/* 登录注册模态框 */}
                <Modal title="登录与注册" visible={this.state.visible}
                       onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)} >
                    <Tabs defaultActiveKey="1" onChange={this.changesTag.bind(this)}>
                        <TabPane tab="登录" key="1">
                            {/* 登录表单 */}
                            <Form layout="vertical" onSubmit={this.handleSubmit.bind(this)}>
                                <Form.Item>
                                    {getFieldDecorator('userName', {
                                        rules: [{ required: true, message: 'Please input your username!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: 'Please input your Password!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    )}
                                </Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Log in
                                </Button>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            {/* 注册表单 */}
                            <Form layout="vertical" onSubmit={this.handleSubmit.bind(this)}>
                                <Form.Item>
                                    {getFieldDecorator('regUserName', {
                                        rules: [{ required: true, message: 'Please input your regUserName!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('regPassword', {
                                        rules: [{ required: true, message: 'Please input your regPassword!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    )}
                                </Form.Item>
                                {/*<Form.Item>*/}
                                    {/*{getFieldDecorator('QRregPassword', {*/}
                                        {/*rules: [{ required: true, message: 'Please input your QRregPassword!' }],*/}
                                    {/*})(*/}
                                        {/*<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Repassword" />*/}
                                    {/*)}*/}
                                {/*</Form.Item>*/}
                                <Button type="primary" htmlType="submit">
                                    register
                                </Button>
                            </Form>
                        </TabPane>

                    </Tabs>
                </Modal>
            </div>
        )
    }
}
export default Nav = Form.create({})(Nav);