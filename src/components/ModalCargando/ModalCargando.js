import React from 'react';
import Modal from "react-bootstrap/Modal";

function ModalCargando ({show}) {
    return (
        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Cargando Productos</Modal.Title>
            </Modal.Header>
        </Modal>
    )
}
export default ModalCargando;