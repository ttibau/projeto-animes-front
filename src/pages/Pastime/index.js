import React, { useState, useEffect } from 'react'
import { Layout, Menu, Icon, Button } from 'antd'
import { CreatePastime, PastimeTable, ModalError } from '../../components'
import { Link } from 'react-router-dom'
import { getPastimes } from '../../services/api/'
import { useDispatch } from 'react-redux'

const { Header, Sider, Content } = Layout;

export default function Pastime(){
    const [collapsed, setCollapsed] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const dispatch = useDispatch()

    function showModalError(number, title, subtitle) {
        dispatch({ type: 'SHOW_MODAL_ERROR', modalErrorContent: {
            errorNumber: number, 
            errorTitle: title, 
            errorSubtitle: subtitle,
            redirectTo: '/login'
        }})
    }

    useEffect(() => {
        async function fetchPastimes() {
            try {
                let user = JSON.parse(localStorage.getItem('userInfo'))
                let response = await getPastimes(user.token)
                let pastimes = response.data 
                console.log(pastimes)
            }
            catch(e) {
                if(e.response) {
                    if(e.response.status === 401) {
                        showModalError(e.response.status, 'Ocorreu algum erro', e.response.data.error)
                    }
                } else {
                    showModalError(500, 'Ocorreu um erro', 'Algo deu errato, tente novamente.')
                }
                console.log(e.response)
            }
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
            <ModalError />
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
                    <Button icon="plus" type="primary" onClick={() => showModalError()}>
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