import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'pages/home/component/index.jsx';
class Wrapper extends React.Component{
    render(){
        return(
            <div>
               <Home></Home>
            </div>
        )
    }
}
ReactDOM.render(
    <Wrapper/>,document.getElementById('app')
)