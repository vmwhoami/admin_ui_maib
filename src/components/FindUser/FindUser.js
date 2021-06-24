import React from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';

const FindUser = () => (
  <>
    <h4>Cauta Uilizator</h4>
    <Form as={Row}>
      <Col lg={8}>
        <Row className="mb-3 d-flex align-items-end">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label className="green">IDNP</Form.Label>
            <Form.Control className="rounded-0 border-top-0 border-left-0 border-right-0 shadow-none mt-2 px-0" type="text" placeholder="nr IDNP" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="green">Nr. Telefon</Form.Label>
            <Form.Control className="rounded-0 border-top-0 border-left-0 border-right-0 shadow-none mt-2 px-0" type="text" placeholder="Nr.Telefon" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label className="green">Data acces</Form.Label>
            <Form.Control className="rounded-0 border-top-0 border-left-0 border-right-0 shadow-none mt-2 px-0" type="date" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Button className="w-100 rounded-0 title text-uppercase border-0">Cauta</Button>
          </Form.Group>
        </Row>
      </Col>
    </Form>
  </>
);

export default FindUser;
