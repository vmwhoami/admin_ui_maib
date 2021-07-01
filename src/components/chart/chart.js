import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Line } from 'react-chartjs-2';
import ReportResults from './reportResults';
import { timeDifference } from '../../utils';
import { setTimeDifference } from '../../redux/downloadsReducer/actions';

const Chart = () => {
  const dispatch = useDispatch();
  const downUsers = useSelector(state => state.downloads);
  const formatDate = dateString => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const { downloads, timeRange } = downUsers;
  const [start, end] = timeRange;
  const startDate = new Date(start);
  const endDate = new Date(end);
  useEffect(() => {
    const timeDiff = timeDifference(startDate, endDate);
    dispatch(setTimeDifference(timeDiff));
  }, [start, end]);
  const results = downloads.filter(d => {
    const date = new Date(d.date);
    if (start && end) {
      return startDate <= date && date <= endDate;
    }
    return d;
  });

  return (
    <>
      <Row className="box-shadow mt-5 mx-1 p-2">
        <Line
          data={{
            labels: results.map(users => formatDate(users.date)),
            fill: true,
            datasets: [
              {
                label: 'Unique Users',
                data: downloads.map(user => user.nrUniqUsers),
                backgroundColor: '#B4DFC4',
                fill: true,
                line: {
                  tension: 0,
                },
              },
            ],
          }}
          options={{
            maintainAspectRatio: true,
          }}
        />
      </Row>
      <div className="box-shadow mb-5 pb-5">
        <Row className="border-bottom mt-5 mx-1 p-3 text-center">
          <Col><h6>Data</h6></Col>
          <Col><h6>Numar utilizatori total</h6></Col>
          <Col><h6>Numar utilizatori unici</h6></Col>
          <Col><h6>Numar utilizatori unici</h6></Col>
        </Row>
        {results.map(result => <ReportResults key={result.id} report={result} />)}
      </div>
    </>
  );
};

export default Chart;
