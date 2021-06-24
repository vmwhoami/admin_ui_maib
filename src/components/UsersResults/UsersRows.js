import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const UsersRows = ({ user }) => {
  const {
    numele, prenumele, idnp, phone, lastTransaction, panCard,
  } = user;
  return (
    <Row Row className="border-bottom pb-2 ">
      <Col>
        <span>
          {numele}
          {' '}
          {prenumele}
        </span>
      </Col>
      <Col><span>{idnp}</span></Col>
      <Col><span>{phone}</span></Col>
      <Col><span>{panCard}</span></Col>
      <Col><span>{lastTransaction}</span></Col>
    </Row>
  );
};
UsersRows.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,

};
export default UsersRows;
