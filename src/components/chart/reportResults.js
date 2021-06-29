import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ReportResults = ({ nrOfUsers, nrUniqUsers, date }) => (
  <Row className="border-bottom py-1 ml-2 ">
    <Col><span>{nrOfUsers}</span></Col>
    <Col><span>{nrUniqUsers}</span></Col>
    <Col><span>{date}</span></Col>
  </Row>
);

export default ReportResults;
