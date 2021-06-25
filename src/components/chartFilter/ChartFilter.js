import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  Row, Button, Form, Col,
} from 'react-bootstrap';

const ChartFilter = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <>
      <Form as={Row} className="m-4 d-flex justify-content-between">
        <Button className="text-uppercase rounded-0 title border-0 py-0">Configure raport</Button>
        <div className="date-select px-4 py-2">
          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="floatingSelect">Last num days</label>
          <DatePicker
            placeholderText="Select a range"
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={update => {
              setDateRange(update);
            }}
          // isClearable
          />

        </div>
      </Form>
      <Row>
        <Col lg={4} sm={6} className="py-4 ml-4 box-shadow">
          <h2>Hello world</h2>
        </Col>
      </Row>
    </>
  );
};

export default ChartFilter;
