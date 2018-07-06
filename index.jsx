import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainers from 'pages/home/containers/index.jsx';
import { HashRouter as Router ,Route ,Link ,Switch} from 'react-router-dom';
import thunk from'redux-thunk';//安装redux-thunk中间建,可以处理异步，action可以返回函数
import {createStore,applyMiddleware,compose} from 'redux';//使用applyMiddleware开启thunk中间件,并管理
import {counterReducer,add,reduce,addAsync} from "common/reducer/index.jsx";
import {Provider}from 'react-redux';//provider组建在应用最外层，传入store即可，只用一次
import Login from 'pages/login/component/index.jsx';
import Register from 'pages/register/component/index.jsx';
import Header from 'pages/header/component/index.jsx';
import Footer from 'pages/footer/component/index.jsx';
import My from 'pages/my/component/index.jsx';
import createHistory from 'history/createHashHistory';
import goodsContainers from "pages/goods/containers/index.jsx";

const store=createStore(counterReducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));
const history = createHistory();
/*thunk中间建可以处理异步，action可以返回函数,
1、新建store的时候判断window.devToolsExtension
2、使用compose结合thunk和window.devToolsExtension
3、调试窗的redux选项卡，实施看到state
*/
ReactDOM.render(
    (<Provider store={store}>
        <Router history={history}>
            <div style={{overflow:'hidden',marginBottom:'55px'}}>
                <Header/>
                <Route exact path='/' component={HomeContainers}/>
                <Route  path='/login' component={Login}/>
                <Route  path='/register' component={Register}/>
                <Route  path='/my' component={My}/>
                <Route  path='/goodsContainers/:id' component={goodsContainers}/>
                <Footer/>
            </div>
        </Router>
    </Provider>),document.getElementById('app')
)

