import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import UsersRows from './UsersRows';
import { formatDate, checkUserName } from '../../utils';

const UsersResults = () => {
  const reducer = useSelector(state => state.users);
  const {
    users, idnpSelected, phoneSelected, dateSelected,
  } = reducer;
  const searchDate = new Date(dateSelected);
  const somdeDate = () => `${searchDate.getDate()}/${searchDate.getMonth() + 1}/${searchDate.getFullYear()}`;
  const reqDate = somdeDate();

  return (
    <>
      <Row>
        <h2 className="ml-3">
          Resultatele cautarii:
          {' '}
          {checkUserName(users, idnpSelected)}
        </h2>
      </Row>
      <Row className="border-bottom pb-2 ">
        <Col><h6>Numele Prenumele</h6></Col>
        <Col><h6>IDNP</h6></Col>
        <Col><h6>Nr.Telefon</h6></Col>
        <Col><h6>PAN Card</h6></Col>
        <Col><h6>Last Transaction</h6></Col>
      </Row>
      {users && users
        .filter(user => {
          if (idnpSelected === '') {
            return true;
          }
          return user.idnp.includes(idnpSelected);
        })
        .filter(user => {
          if (phoneSelected === '') {
            return true;
          }
          return user.phone.includes(phoneSelected);
        })
        .filter(user => {
          if (dateSelected === '') {
            return true;
          }
          const lastTrans = formatDate(user.lastTransaction).split(' ')[3].trim();
          return lastTrans.includes(reqDate);
        })
        .map(user => (
          <UsersRows key={user.id} user={user} />
        ))}
    </>
  );
};

export default UsersResults;
