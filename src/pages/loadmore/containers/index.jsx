import React from 'react';
class loadMore extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){

        window.addEventListener('scroll',function () {
             const scrollRange=window.document.body.scrollHeight-window.screen.height;
             const scrollTop=document.documentElement.scrollTop || window.pageYOfset ||document.body.scrollTop;

            if(scrollTop+10>scrollRange){
                this.props.loadingfn();
            }
        }.bind(this),false);


    }

    // onScrollfn(){
    //
    //     // const scrollRange=window.document.body.scrollHeight-window.screen.height;
    //     // const scrollTop=document.documentElement.scrollTop || window.pageYOfset ||document.body.scrollTop;
    //     // if(scrollTop>scrollRange){
    //     //
    //     //     console.log(scrollTop,'scrollTop');
    //     //     console.log(scrollRange,'scrollRange');
    //     // }
    // }
    render(){
        return(
            <div>
            {this.props.loading?<div>数据正在加载中...</div>:<div></div>}
            </div>

        )
    }
}
export default loadMore;