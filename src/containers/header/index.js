import React from 'react';
import { Layout, Menu } from 'antd';

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
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">My Pokemon</Menu.Item>
      </Menu>
    </DefaultHeader>
  );
}

export default Header;