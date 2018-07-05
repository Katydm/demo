import React from 'react';
import {connect} from 'react-redux';//connect负责从外部获取组件需要的参数
import {Button} from'antd-mobile';
import {add,reduce,addAsync} from "common/reducer/index.jsx"

//import 'antd-mobile/dist/antd-mobile.css';
// @connect(
//     //你要state什么属性放到props里
//     state=>({num:state}),
//     //你要什么方法，放到props里，自动dispatch
//     {add,reduce,addAsync}
// )
const mapStatetoProps=(state)=>{
    return{num:state}
    console.log(num,'dd')
}
const actionCreators={add,reduce,addAsync}
//@connect(mapStatetoProps,actionCreators)
class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const num=this.props.num;
        const add=this.props.add;
        const reduce=this.props.reduce;
        const addAsync=this.props.addAsync;
        console.log(this.props,'num');
        return (
            <div>
                <span>现在机关枪有把{num}</span>
                <Button type='primary' onClick={add}>添加</Button>
                <Button type='primary' onClick={reduce}>减少</Button>
                <Button type='primary' onClick={addAsync}>
                    延迟
                </Button>
            </div>

        )
    }
}

 Home=connect(mapStatetoProps,actionCreators)(Home)

export default Home;