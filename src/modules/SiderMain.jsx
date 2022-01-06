import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'

const SiderMain = () => {
    return (
        <>
            <Sider
              className='colMain'
            >
              <div className="logo" />
              <Menu mode="inline" defaultSelectedKeys={["4"]}>
                <Menu.Item key="1">Add new</Menu.Item>
                <Menu.Item key="2">List</Menu.Item>
                <Menu.Item key="3">Delete</Menu.Item>
              </Menu>
            </Sider>
        </>
    )
}

export default SiderMain
