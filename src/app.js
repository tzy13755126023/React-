import React from 'react';
import ReactDom from 'react-dom';
import 'antd/dist/antd.css';
import MediaQuery from "react-responsive"

import { Router,Route,hashHistory,IndexRoute} from 'react-router';

// PC端
import PcIndex from './pc/pc_index';
import Index from './pc/pages/newstype/index'
import Yule from './pc/pages/newstype/yule'
import Tiyu from './pc/pages/newstype/tiyu'
import Junshi from './pc/pages/newstype/junshi'
import Guoji from './pc/pages/newstype/guoji'
import Guonei from './pc/pages/newstype/guonei'
import People from  './pc/pages/center/peoplecenter'

// 移动端
import MobileIndex from './mobile/mobile_index';
import Recommend from './mobile/pages/recommend'
import Hot from './mobile/pages/hot'
import Mine from './mobile/pages/mine'
import Yule2 from './mobile/pages/newstypes/yule2'
import Junshi2 from './mobile/pages/newstypes/junshi2'
import Guoji2 from './mobile/pages/newstypes/guoji2'
import Guonei2 from './mobile/pages/newstypes/guonei2'

class App extends React.Component{
    render() {
        return(
            <div>
                {/* PC端 */}
                <MediaQuery query="(min-device-width: 1224px)">
                    <Router history={hashHistory}>
                        <Route path={`/`} component={PcIndex}>
                        <IndexRoute component={Index}></IndexRoute>
                            <Route path={`/yule`} component={Yule}></Route>
                            <Route path={`/tiyu`} component={Tiyu}></Route>
                            <Route path={`/junshi`} component={Junshi}></Route>
                            <Route path={`/guoji`} component={Guoji}></Route>
                            <Route path={`/guonei`} component={Guonei}></Route>
                        </Route>
                        <Route path={`/center`} component={People}></Route>

                    </Router>
                </MediaQuery>

                {/* 移动端 */}
                <MediaQuery query="(max-device-width: 1224px)">
                  <Router history={hashHistory}>
                    <Route path={`/`} component={MobileIndex}>
                        <IndexRoute  component={Recommend}></IndexRoute>
                        <Route path={`/hot`} component={Hot}></Route>
                        <Route path={`/mine`}component={Mine}></Route>

                        <Route path={`/yule2`} component={Yule2}></Route>
                        <Route path={`/junshi2`} component={Junshi2}></Route>
                        <Route path={`/guoji2`} component={Guoji2}></Route>
                        <Route path={`/guonei2`} component={Guonei2}></Route>
                    </Route>
                  </Router>
                </MediaQuery>
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById('root'));