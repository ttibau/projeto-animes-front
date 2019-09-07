import React from 'react' 
import { Modal, Button, Result } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

export default function Unauthorized() {
    const showModal = useSelector(state => state.showModalError)
    const modalErrorContent = useSelector(state => state.modalErrorContent)
    const dispatch = useDispatch()

    return(
        <Modal
            title="Ocorreu algum erro"
            visible={showModal}
            footer={[
                <Button key="btnCloseModal" onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>Ok</Button>
            ]}
        >
            {showModal &&
                <Result
                    status={modalErrorContent.errorNumber}
                    title={modalErrorContent.errorTitle}
                    subtitle={modalErrorContent.errorSubtitle}
                />
            }
      </Modal>
    )
}