import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const UsersRows = ({ user }) => {
  const {
    numele, prenumele, idnp, phone, lastTransaction, panCard,
  } = user;
  const date = new Date(lastTransaction);
  const displayDate = `${date.getHours()}: ${date.getMinutes()} 
  ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return (
    <Row className="border-bottom py-1 ">
      <Col>
        <span className="green">
          {numele}
          {' '}
          {prenumele}
        </span>
      </Col>
      <Col><span>{idnp}</span></Col>
      <Col><span>{phone}</span></Col>
      <Col><span>{panCard}</span></Col>
      <Col><span>{displayDate}</span></Col>
    </Row>
  );
};
UsersRows.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,

};
export default UsersRows;
