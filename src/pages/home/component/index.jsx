import React from 'react';
import {connect} from 'react-redux';//connect负责从外部获取组件需要的参数
import {Button} from'antd-mobile';
import {counterReducer,add,reduce,addAsync} from "common/reducer/index.jsx"

//import 'antd-mobile/dist/antd-mobile.css';


class Home extends React.Component{
    render(){
        const num=this.props.num;
        const add=this.props.add;
        const reduce=this.props.reduce;
        const addAsync=this.props.addAsync;
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
const mapStatetoProps=(state)=>{
    return{num:state}
}
const actionCreators={add,reduce,addAsync}
Home=connect(mapStatetoProps,actionCreators)(Home)
export default Home;