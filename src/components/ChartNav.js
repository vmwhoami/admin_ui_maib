import React from 'react';
import { Row, Button } from 'react-bootstrap';

const ChartNav = () => (
  <Row className="py-2 title">
    <Button className="bg-transparent rounded-0 border-top-0 border-left-0 border-right-0
    text-uppercase mx-3 font-weight-bold border-white"
    >
      Chart
    </Button>
    <Button className="bg-transparent rounded-0 border-top-0 border-left-0 border-right-0
    text-uppercase mx-3 font-weight-bold border-white"
    >
      Report
    </Button>
  </Row>
);

export default ChartNav;
