import React from'react';
import './index.css';
class Gooddetail extends React.Component{
    constructor(props){
        super(props)
    }
 render(){
        const Data=this.props.data;
        console.log(Data)
     return(
         <div>
             <div className='single_product_img'><img src={Data.image1} alt=""/></div>
             <div>
                 <div className="single_product_price">
                     <p>
                         <span>{Data.cn_title}</span>
                         <span>{Data.en_title}</span>
                     </p>
                     <p>
                            <span>
                                <span>超惠价特卖中</span>
                            </span>
                     </p>
                 </div>
                 <p className='goods_price_wrap'>
                     <span>非会员价：${Data.market_price}</span>
                     <span>${Data.price}</span>
                 </p>
             </div>
             <div className="single_product_content">
                 <ul>
                     <li>
                         <span>规格：</span>
                         <span>{Data.weight}克</span>
                         <span className="goincart">加入购物车</span>
                     </li>
                     <li>
                         <span>数量：</span>
                         <p>
                             <span id="reduce_num" >-</span>
                             <span id="goods_num">1</span>
                             <span id="add_num" >+</span>
                         </p>
                         <p><span id="go_pay">开心结算</span></p>
                     </li>
                 </ul>
             </div>
             <div className='description_wrap'>
                 {Data.description}
             </div>
         </div>
     )
 }
}
export default Gooddetail;