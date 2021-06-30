import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const ReportResults = ({ report }) => {
  console.log(report);
  const { nrOfUsers, nrUniqUsers, date } = report;
  return (
    <Row className="border-bottom mx-3 text-center">
      <Col className="py-2"><span>{date}</span></Col>
      <Col><span>{nrOfUsers}</span></Col>
      <Col><span>{nrUniqUsers}</span></Col>
      <Col><span>{nrUniqUsers}</span></Col>
    </Row>
  );
};

ReportResults.propTypes = {
  report: PropTypes.instanceOf(Object).isRequired,
};
export default ReportResults;
