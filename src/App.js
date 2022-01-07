import React from 'react';
import './App.css';
import { Navbar, Container, Nav, Card, Button, Modal, Form } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Shopify Store Inventory</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#add">Add</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
  <Card className='itemCard' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Add an Item</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Enter item name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
</Form>

    
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary" type="submit">Add</Button>
  </Modal.Footer>
</Modal.Dialog>



    </div>
  );
}

export default App;
