import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'pages/home/component/index.jsx';
import thunk from'redux-thunk';//安装redux-thunk中间建,可以处理异步，action可以返回函数
import {createStore,applyMiddleware,compose} from 'redux';//使用applyMiddleware开启thunk中间件,并管理
import {counterReducer,add,reduce,addAsync} from "common/reducer/index.jsx";
import {Provider}from 'react-redux';//provider组建在应用最外层，传入store即可，只用一次

const store=createStore(counterReducer,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));
/*thunk中间建可以处理异步，action可以返回函数,
1、新建store的时候判断window.devToolsExtension
2、使用compose结合thunk和window.devToolsExtension
3、调试窗的redux选项卡，实施看到state
*/


ReactDOM.render(
    (<Provider store={store}>
     <Home/>
    </Provider>),document.getElementById('app')
)

