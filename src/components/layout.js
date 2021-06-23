import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import getUsers from '../redux/reducer/actions';
import NavBar from './navbar/NavBar';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <Container className="px-0" fluid>
      <NavBar />
      <Row>
        {children}
      </Row>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default Layout;
