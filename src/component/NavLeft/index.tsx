import React,{useEffect} from 'react';
import {Menu} from 'antd';
import { NavLink } from 'umi';
import menuConfig , {menuItem} from './menuConfig'
import './style.less'


const {Item,SubMenu} = Menu;
interface INavLeftProps {
}

const NavLeft: React.FunctionComponent<INavLeftProps> = (props) => {
    useEffect(()=>{
        console.log(menuConfig)
    },[])

    let renderMenu =(data:Array<menuItem>)=>{
        return data.map((item,index)=>{
            if(item.children){
                return <SubMenu title={item.title} key={item.key}>
                    {renderMenu(item.children)}
                </SubMenu>
            }else {
                return <Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Item>
            }
        })
    }
  return <div className="NavLeft">
    <div className="Icon">
        <img src="./asset/logo-ant.svg" alt="" />
        <h1>车行管理系统</h1>
    </div>
    <Menu theme={'dark'}>
        {renderMenu(menuConfig)}
    </Menu>
  </div>;
};

export default NavLeft;
