import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import { setIdnp, setPhone, setAccessDate } from '../../redux/reducer/actions';

const FindUser = () => {
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    idnp: '',
    phone: '',
    date: '',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted');
    dispatch(setIdnp(fields.idnp));
    dispatch(setPhone(fields.phone));
    dispatch(setAccessDate(fields.date));
  };

  return (
    <>
      <h4>Cauta Uilizator</h4>
      <Form
        noValidate
        onSubmit={handleSubmit}
      >
        <Col lg={8}>
          <Row className="mb-3 d-flex align-items-end">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="green">IDNP</Form.Label>
              <Form.Control
                name="idnp"
                onChange={handleChange}
                value={fields.idnp}
                className="rounded-0 border-top-0 border-left-0 border-right-0 shadow-none mt-2 px-0"
                type="text"
                placeholder="nr IDNP"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="green">Nr. Telefon</Form.Label>
              <Form.Control
                name="phone"
                onChange={handleChange}
                value={fields.phone}
                className="rounded-0 border-top-0 border-left-0 border-right-0 shadow-none mt-2 px-0"
                type="text"
                placeholder="Nr.Telefon"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="green">Data acces</Form.Label>
              <Form.Control
                name="date"
                onChange={handleChange}
                value={fields.date}
                className="rounded-0 border-top-0 border-left-0 border-right-0 shadow-none mt-2 px-0"
                type="date"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Button
                type="submit"
                className="w-100 rounded-0 title text-uppercase border-0"

              >
                Cauta
              </Button>
            </Form.Group>
          </Row>
        </Col>
      </Form>
    </>
  );
};

export default FindUser;
