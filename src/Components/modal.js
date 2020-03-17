import React, { Component } from "react";
import {Button, Modal, FormControl} from 'react-bootstrap'
class Modals extends Component {
    state={
        show:false
    }
  handleShow = () =>{
        this.setState({
            show: !this.state.show
    })};
  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Open Modal
        </Button>
        <Modal show={this.state.show} onHide={this.handleShow} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Modal</Modal.Title>
          </Modal.Header>
          <input type="text"></input>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleShow}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


export default Modals


