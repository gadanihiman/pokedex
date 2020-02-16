import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

const { Header: DefaultHeader } = Layout;

const Header = () => {
  return (
    <DefaultHeader>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/profile">My Pokemon</Link>
        </Menu.Item>
      </Menu>
    </DefaultHeader>
  );
}

export default Header;