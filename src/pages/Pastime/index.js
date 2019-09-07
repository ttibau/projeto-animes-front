import React, { useState, useEffect } from 'react'
import { Layout, Menu, Icon, Button } from 'antd'
import { CreatePastime, PastimeTable } from '../../components'
import { Link } from 'react-router-dom'
import { getPastimes } from '../../services/api/'

const { Header, Sider, Content } = Layout;

export default function Pastime(){
    const [collapsed, setCollapsed] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
    
        async function fetchPastimes() {
            let response = await getPastimes()
            let pastimes = response.data 
            console.log(pastimes)
        }

        fetchPastimes()
    }, [])

    function showModal() {
        setModalVisible(true)
    }

    function handleCancel(){
        setModalVisible(false)
    }

    const toggleMenu = () => {
        setCollapsed(!collapsed)
    }

    return(
        <Layout style={{ height:"100vh" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="user" />
                        <span>Dashboard</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/pastime">
                        <Icon type="video-camera" />
                        <span>Entretenimento</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                <Icon type="upload" />
                <span>Episódio</span>
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Icon
                        className="trigger"
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={() => toggleMenu()}
                    />
                </Header>
                <Content
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                    }}
                >
                    <Button icon="plus" type="primary" onClick={() => showModal()}>
                        Novo
                    </Button>
                    <CreatePastime
                        visible={modalVisible}
                        onCancel={handleCancel}
                    />
                    <PastimeTable />
                </Content>
            </Layout>
      </Layout>
    )
}