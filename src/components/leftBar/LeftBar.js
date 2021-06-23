import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { AiOutlineDashboard } from 'react-icons/ai';
import { GrSupport } from 'react-icons/gr';

const LeftBar = () => (
  <Col className="left-bar d-flex flex-column ">
    <Button variant="light" className="d-flex h-2 align-items-center ml-4 my-3 fs-4 cust-button">
      <AiOutlineDashboard className="mr-2" />
      Dashboard
    </Button>
    <Button variant="light" className="d-flex h-2 align-items-center  ml-4 fs-4 cust-button">
      <GrSupport className="mr-2 text-white" />
      Support
    </Button>
  </Col>
);

export default LeftBar;
