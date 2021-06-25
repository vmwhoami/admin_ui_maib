import React from 'react';
import {
  Row, Button, Form, Col,
} from 'react-bootstrap';
// import FloatingLabel from 'react-bootstrap-floating-label';

const ChartFilter = () => (
  <>
    <Form as={Row} className="m-4 d-flex justify-content-between">
      <Button className="text-uppercase rounded-0 title border-0">Configure raport</Button>
      <div className="date-select px-4 py-2">
        { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="floatingSelect">Works with selects</label>
        <select className="form-select border-0" id="floatingSelect" aria-label="Floating label select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </Form>
    <Row>
      <Col lg={4} sm={6} className="py-4 ml-4 box-shadow">
        <h2>Hello world</h2>
      </Col>
    </Row>
  </>
);

export default ChartFilter;
