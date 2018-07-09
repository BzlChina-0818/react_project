import React, { Component } from 'react'
import { Menu, Icon, Button } from 'antd'
import {Link} from 'react-router-dom'
import style from '../css/home'
import RouterView from '../router/router'
const SubMenu = Menu.SubMenu;
import {Route,Switch,Redirect} from 'react-router-dom'
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  render() {
    console.log(this.props)
    return (
      <div className={style.wraps}>
            {/* <Redirect to="/home/eschats"/> */}
      
        <div style={{ width: 256}}>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
            style={{height:"100%"}}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>新建广告</span>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/home/eschats">
              <Icon type="desktop" />
              
                  <span>
                  首页预览
                    </span>
                </Link> 
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>广告管理</span></span>}>
              <Menu.Item key="5">
               <Link to="/home/gao">广告计划</Link> 
              </Menu.Item>
              <Menu.Item key="6">广告单元</Menu.Item>
              <Menu.Item key="7">广告创意</Menu.Item>
            </SubMenu>
            <Menu.Item key="3">
              <Icon type="desktop" />
              <span>数据中心</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="desktop" />
              <span>工具箱</span>
            </Menu.Item>
          </Menu>
        </div>
        <div className={style.right}>
         
          <RouterView childRoutes={this.props.childRoutes}/>
        </div>
        
      </div>


    )
  }
}
export default Home