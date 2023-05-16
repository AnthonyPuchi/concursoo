import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    GlobalOutlined,
    VideoCameraOutlined, BankOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

import {Space} from "antd/lib";
import {NavLink, Outlet} from "react-router-dom";
const { Header, Sider, Content } = Layout;



 const RootLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout >
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: (<NavLink to="/login">Login</NavLink>),
                        },
                    ]}
                />
            </Sider>
            <Layout >
                <Header style={{ padding: 0, background: colorBgContainer }}>

                    <Space>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        <h1 >Two-Fer</h1>
                    </Space>
                </Header>

                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
<Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default RootLayout;