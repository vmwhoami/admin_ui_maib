import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row } from 'react-bootstrap';
import { getDowloads } from '../../redux/downloadsReducer/actions';

const DownRes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDowloads());
  }, []);
  return (
    <Row>
      <h1>Display my results</h1>
    </Row>
  );
};

export default DownRes;
