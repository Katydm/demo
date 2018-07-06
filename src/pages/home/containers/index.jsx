import React from 'react';
import axios from "axios";
import Home from  'pages/home/component/index.jsx';
import LoadMore from 'pages/loadmore/containers/index.jsx';
class HomeContainers extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            page:1,
            data:[],
            loading:true,
            touch:true,
        }
    }
    loadingFn(){
        this.setState({
            loading:true,
        });
        this.state.page++;
        this.componentDidMount();
    }

    componentDidMount(){



        axios.get('http://lv55api.brolgatech.com/api/v1/goods?per_page=6&page='+this.state.page).then(res=>{
            if(this.state.page>res.data.meta.last_page){
                this.setState({
                    touch:false
                });
                return
            }else{
                this.setState({
                    data:this.state.data.concat(res.data.data)
                })
            }

        })

    }


    render(){

        const data=this.state.data;
        return(
            <div>
                <Home data={data}/>
                    {
                     this.state.touch
                     ?
                     <LoadMore loading={this.state.loading} loadingfn={this.loadingFn.bind(this)}/>
                     :
                     <div>不要拉了，没有更多数据了！！</div>
                    }
            </div>

        )
    }
}
export default HomeContainers