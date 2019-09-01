import React from 'react'
import { Helmet } from 'react-helmet'
import {  Card, Row } from 'antd'

export default function Login() {
    return(
        <div>
            <Helmet bodyAttributes={{style: 'background-color : #2980b9'}} />
               <Row type="flex" justify="center" style={{ height: '100%'}}>
               <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title="Card title" bordered={false} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
               </Row>
        </div>	
    )
}