import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import './index.css';

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        const Data=this.props.data;
        if(Data){
            return(
                <div>
                    <ul className = "goods_list" >
                        {
                            Data.map((data)=>(
                                    < li className = "goods_warp" key={data.id}>
                                        <Link to={{pathname:"/goodsContainers/"+data.id}}>
                                            <div className = "goods_pic" >
                                                <div>< img src = {data.image1} alt = "" /></div>
                                            </div>
                                            <span className="goods_title">{data.cn_title}</span>
                                            <p className="goods_price"><span>${data.price}</span></p>
                                        </Link>
                                    </li>
                                )
                            )
                        }
                    </ul>

                </div>

            )
        }else{
            return(
                <div>加载中...</div>
            )
        }

    }
}

export default Home;