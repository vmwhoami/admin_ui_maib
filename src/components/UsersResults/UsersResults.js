import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import UsersRows from './UsersRows';

const UsersResults = () => {
  const users = useSelector(state => state.users.users);
  return (
    <>
      <Row>
        <h2 className="ml-3">
          Resultatele cautare:Toti
        </h2>
      </Row>
      <Row className="border-bottom pb-2 ">
        <Col><h6>Numele Prenumele</h6></Col>
        <Col><h6>IDNP</h6></Col>
        <Col><h6>Nr.Telefon</h6></Col>
        <Col><h6>PAN Card</h6></Col>
        <Col><h6>Last Transaction</h6></Col>
      </Row>
      {users.map(user => (
        <UsersRows key={user.id} user={user} />
      ))}
    </>
  );
};

export default UsersResults;
