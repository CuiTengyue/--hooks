import * as React from 'react';
import {Layout} from 'antd';
import NavLeft from '@/component/NavLeft'
import NavHeader from '@/component/NavHeader';

const { Header, Footer, Sider, Content } = Layout;
interface I_layoutProps {
}

const _layout: React.FunctionComponent<I_layoutProps> = (props) => {
  return <Layout className="_layout">
    {/* 侧边栏 */}
    <Sider 
        style={{height:'100vh'}}
        width={200}
        collapsedWidth={0} // 缩回去还剩多少
        breakpoint={'lg'} // 小于多少时缩进去
    >
        <NavLeft/>
    </Sider>
    
    {/* 右边栏 */}
    <Content>
        <NavHeader></NavHeader>
        <Content style={{minHeight:'60vh',border:"1px solid #000",margin:'12px'}}>
            {props.children}    
        </Content>
        
        <Footer style={{textAlign:'center',color:'#ccc'}}>底部</Footer>
    </Content>
  </Layout>;
};

export default _layout;
