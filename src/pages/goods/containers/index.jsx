import React from 'react';
import axios from 'axios';
import Gooddetail from 'pages/goods/component/index.jsx'
class goodsContainers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:''
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        console.log(id)
        axios.get("http://lv55api.brolgatech.com/api/v1/goods/"+id).then(res=>{
            this.setState({
                data:res.data.data
            })
            //console.log(this.state.data)
        })

    }
    render(){

        const data=this.state.data;
        return(

            <Gooddetail data={data}/>

        )
    }
}
export default goodsContainers;