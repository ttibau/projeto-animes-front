import React, { useEffect, useState } from 'react' 
import { Modal, Button, Result } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function Unauthorized() {
    const showModal = useSelector(state => state.showModalError)
    const modalErrorContent = useSelector(state => state.modalErrorContent)
    const dispatch = useDispatch()
    const [modalContent, setModalContent] = useState({})
    const [showRedirect, setShowRedirect] = useState(false)

    useEffect(() => {
        setModalContent(modalErrorContent)
    }, [modalErrorContent])

    function modalClose() {
        // flag que redireciona
        dispatch({ type: 'CLOSE_MODAL' })
        setShowRedirect(true)
    }


    return(
        modalContent.errorNumber ?
        <Modal
            title="Ocorreu algum erro"
            visible={showModal}
            footer={[
                <Button key="btnCloseModal" onClick={() => modalClose() }>Ok</Button>
            ]}
        >
            <Result
                status={modalContent.errorNumber.toString()}
                title={modalContent.errorSubtitle.toString()}
                subtitle={modalContent.errorSubtitle.toString()}
            />
            {showRedirect &&
                <Redirect to="/login" />
            }
      </Modal>
      :
      <>
      </>
    )
}