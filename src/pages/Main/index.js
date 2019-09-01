import React, { useState, useRef } from 'react'
import { Layout, Menu, Icon, Button } from 'antd';
import { CreatePastime } from '../../components/'
const { Header, Sider, Content } = Layout;

export default function Main(){
    const [collapsed, setCollapsed] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const formRef = useRef(null)

    function showModal() {
        setModalVisible(true)
    }

    function handleCancel(){
        setModalVisible(false)
    }

    function handleCreate() {
        // const { form } = this.formRef.props
        // form.validateFields((err, values) => {
        //     if (err) {
        //         return
        //     }

        //     console.log('Received values of form: ', values)
        //     form.resetFields()
        //     setModalVisible(false)
        // })
    }

    function saveFormRef(formRef) {
        
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
                <Icon type="user" />
                <span>Dashboard</span>
                </Menu.Item>
                <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>Entretenimento</span>
                </Menu.Item>
                <Menu.Item key="3">
                <Icon type="upload" />
                <span>Episódio</span>
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff' }}>
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
                        onCreate={handleCreate}
                    />
                </Content>
            </Layout>
      </Layout>
    )
}