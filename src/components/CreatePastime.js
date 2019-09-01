import React, { useState } from 'react'
import {  Modal, Form, Input, Radio, Button, Upload, Icon, message, InputNumber } from 'antd'
import { TagInput } from '../components'
const { TextArea } = Input

export default function PastimeForm({ visible, onCancel, onCreate, form }) {
    const [imageLinkFlag, setImageLinkFlag] = useState(0)
    const [submitLoading, setSubmitLoading] = useState(false)
    const [dubbedSubtitled, setDubbedSubtitled] = useState(0)

    function changeRadioImageLink(e) {
        setImageLinkFlag(e.target.value)
    }

    function changeDubbedSubtitled(e) {
        setDubbedSubtitled(e.target.value)
    }

    const uploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text'
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
              console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
              message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
              message.error(`${info.file.name} file upload failed.`);
            }
        }
    }

    return(
        <Modal
            visible={visible}
            title="Criar um novo entretenimento"
            okText="Criar"
            onCancel={onCancel}
            onOk={onCreate}
            footer={[
                <Button key="buttoncancelmodal" onClick={() => onCancel()}>
                    Cancelar
                </Button>
            ]}
        >
            <Form layout="vertical">
                <Form.Item label="Título">
                    <Input />
                </Form.Item>
                <Form.Item label="Descrição">
                   <TextArea />
                </Form.Item>
                <Form.Item label="Imagem" >
                    <Radio.Group onChange={e => changeRadioImageLink(e)} value={imageLinkFlag}>
                        <Radio value={0}>Link</Radio>
                        <Radio value={1}>Upload</Radio>
                    </Radio.Group>
                </Form.Item>
                {imageLinkFlag === 0 &&
                    <Form.Item>
                        <Input placeholder="http:// ...  ..." />
                    </Form.Item>
                }
                {imageLinkFlag === 1 &&
                    <Form.Item>
                        <Upload {...uploadProps}>
                            <Button>
                                <Icon type="upload" /> Clique para Upload
                            </Button>
                        </Upload>
                    </Form.Item>
                }
                <Form.Item label="Dublado/Legendado" >
                    <Radio.Group onChange={e => changeDubbedSubtitled(e)} value={dubbedSubtitled}>
                        <Radio value={0}>Dublado</Radio>
                        <Radio value={1}>Legendado</Radio>
                        <Radio value={2}>Ambos</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Quantidade de episódios">
                    <InputNumber />
                </Form.Item>
                <Form.Item>
                    <TagInput />
                </Form.Item>
                <Button type="primary" loading={submitLoading} onClick={() => setSubmitLoading(true)}>
                    Salvar
                </Button>
            </Form>
        </Modal>
    )
}