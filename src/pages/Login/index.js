import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Card, Row, Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
import { login } from '../../services/api/'
import { ModalError } from '../../components/'
import { useDispatch } from 'react-redux'

export default function Login() {
    const [user, setUser] = useState({})
    const [btnLoading, setBtnLoading] = useState(false)
    const dispatch = useDispatch()

    function showModalError(number, title, subtitle) {
        dispatch({ type: 'SHOW_MODAL_ERROR', modalErrorContent: {
            errorNumber: number, 
            errorTitle: title, 
            errorSubtitle: subtitle,
            redirectTo: '/login'
        }})
    }

    async function handleSubmit() {
        console.log(user)
        setBtnLoading(true)
        try {
            let response = await login(user)
            let userLogged = response.data
            console.log(userLogged)
            setBtnLoading(false)
        } catch (e) {
            debugger
            setBtnLoading(false)
            showModalError(e.response.status, 'Erro ao logar', e.response.data.error)
            console.log(e)
        }
    }
    function setEmail(e) {
        let email = e.target.value
        setUser({...user, email })
    }

    function setPassword(e){
        let password = e.target.value
        setUser({...user, password })
    }

    return(
        <div>
            <Helmet bodyAttributes={{style: 'background-color : #2980b9'}} />
                <ModalError />
               <Row type="flex" justify="center" style={{ height: '100%'}}>
               <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title="Login" bordered={false} style={{ width: 300 }}>
                        <Form  className="login-form">
                            <Form.Item>
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="E-mail"
                                type="email"
                                value={user.email}
                                onChange={(e) => setEmail(e) }
                                />
                            
                            </Form.Item>
                            <Form.Item>
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Senha"
                                value={user.password}
                                onChange={(e) => setPassword(e)}
                                />
                            </Form.Item>
                            <Form.Item><Checkbox>Remember me</Checkbox>
                            <Form.Item>
                                <a className="login-form-forgot" href="">
                                    Esqueci a senha
                                </a>
                            </Form.Item>
                            <Button disabled={!user.email && !user.password} loading={btnLoading} onClick={() => handleSubmit()} type="primary" className="login-form-button">
                                Log in
                            </Button>
                             Ou <a href="">registrar agora!</a>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
               </Row>
        </div>	
    )
}