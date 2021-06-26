import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Chart = () => {
  const downloads = useSelector(state => state.downloads.downloads);
  console.log(downloads);
  return (
    <Row>
      <h3>Here will insert the chart</h3>
    </Row>
  );
};

export default Chart;
