import React from 'react';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    HomeFilled,
    SettingFilled,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;



const AdminLayout = (props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const onHandleLogout = (e: any) => {
        e.preventDefault();
        props.onLogout()
    }

    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} >
                    <div className='text-center'>
                        <img className='w-50 rounded-circle  justify-content-between ' src="https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-admin-rolls-glyph-black-icon-png-image_691507.jpg" alt="" />
                    </div>

                    <Menu.Item key="1" icon={<HomeFilled />}>
                        <Link to={'/admin'}>Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<SettingFilled />}>
                        <Link to={'/admin/products'}>Product Management</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SettingFilled />}>
                        <Link to={'/admin/categories'}>Category Management</Link>
                    </Menu.Item>
                    <div className='text-center mt-5' >
                        <form className='' action="" onSubmit={onHandleLogout}>
                            <button className='btn btn-primary'>Đăng xuất</button>
                        </form>
                    </div>

                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: '100vh' }}>
                    <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                        <Outlet />
                    </div>
                </Content>
               
            </Layout>
        </Layout>
    );
};

export default AdminLayout;