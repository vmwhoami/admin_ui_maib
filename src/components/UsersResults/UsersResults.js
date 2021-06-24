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
        <Col><span className="bolder">Numele Prenumele</span></Col>
        <Col><span>IDNP</span></Col>
        <Col><span>Nr.Telefon</span></Col>
        <Col><span>PAN Card</span></Col>
        <Col><span>Last Transaction</span></Col>
      </Row>
      {users.map(user => (
        <UsersRows key={user.id} user={user} />
      ))}
    </>
  );
};

export default UsersResults;
