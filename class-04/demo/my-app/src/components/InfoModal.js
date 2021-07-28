import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class InfoModal extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Name: {this.props.name}</p>
                        <p>Age: {this.props.age}</p>
                        <p>Fav Lang: {this.props.favLang}</p>
                        <p>Do you like Cats?: {this.props.likeCats ? 'Yes' : 'No'}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default InfoModal;