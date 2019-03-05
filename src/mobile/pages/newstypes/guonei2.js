import React from 'react';
import '../../assets/mobile_nav.css'


export default class Guonei2 extends React.Component{
    constructor(){
        super();
    }
    render() {
        return(
            <div>
                <img src={require('../../assets/images/04.jpg')} />
                <img src={require('../../assets/images/hangtian5.jpg')} />
                <img src={require('../../assets/images/05.jpg')} />
                <img src={require('../../assets/images/hangtian6.jpg')} />

                <ul className="none">
                    <li><a href="#">政府工作报告：实施更大规模减税 确保所有行业税负只减不增</a></li>
                    <li><a href="#">别再玩假传奇了，这款爆率+99999倍，找到充值入口算我输！</a></li>
                    <li><a href="#">高考：“华而不实”的5个大学专业，毕业工资才2000，尽量别填报</a></li>
                    <li><a href="#">大学里的“斜杠”青年：“不会弹钢琴的理科生不是好摄影师”</a></li>
                </ul>
                <img src={require('../../assets/images/hangtian1.jpg')} />
                <img src={require('../../assets/images/hangtian2.jpg')} />
                <img src={require('../../assets/images/hangtian3.jpg')} />
                <img src={require('../../assets/images/hangtian4.jpg')} />
                <ul className="none">
                    <li><a href="#">怪不得泾河龙王少下一丁点雨水便被斩头，你看看玉帝吃的是啥菜？</a></li>
                    <li><a href="#">《山海经》记载古昆仑山方位：赤水之后，黑水之前，原来不在中国</a></li>
                    <li><a href="#">西游记有很多妖怪神仙, 为何唯独没有猫妖? 吴承恩: 我可不敢写!</a></li>
                    <li><a href="#">难怪如来要招安牛魔王, 你看的身份是啥? 玉帝都会感到害怕</a></li>
                </ul>
            </div>
        )
    }
}
