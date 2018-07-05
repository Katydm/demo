import React from 'react';
import { Flex, WhiteSpace, List, SearchBar} from 'antd-mobile';
import './header.css'
class Header extends React.Component{

    render(){
        const PlaceHolder = ({ className = '', ...restProps }) => (
            <div className={`${className} placeholder`} {...restProps}></div>
        )
        return(
            <div>
                <Flex className='header'>
                    <PlaceHolder className='logo'></PlaceHolder>
                    <Flex.Item className='search'>
                        <SearchBar className='searchinput' placeholder="Search" maxLength={8}/>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
}
export default Header