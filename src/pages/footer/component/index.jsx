import React from 'react';
import { Flex, WhiteSpace, List, InputItem, TabBar } from 'antd-mobile';
import { NavLink} from 'react-router-dom';
import './footer.css';
class Footer extends React.Component{
constructor(props){
    super(props)
}
    render(){

        return(


                <Flex className='footer_warp'>
                    <Flex.Item>
                        <NavLink exact  to='/' activeClassName='active'>
                            <i className="fa fa-home fa-2x"></i>
                            <span>主页</span>
                        </NavLink>
                    </Flex.Item>
                    <Flex.Item>
                        <NavLink   to='/login' activeClassName='active'>
                            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
                            <span>分类</span>
                        </NavLink>
                    </Flex.Item>
                    <Flex.Item>
                        <NavLink   to='/register' activeClassName='active'>
                            <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                            <span>购物车</span>
                        </NavLink>
                    </Flex.Item>
                    <Flex.Item>
                        <NavLink   to='/my' activeClassName='active'>
                            <i className="fa fa-smile-o fa-2x" aria-hidden="true"></i>
                            <span>我的</span>
                        </NavLink>
                    </Flex.Item>
                </Flex>


        )
    }
}
export default Footer;