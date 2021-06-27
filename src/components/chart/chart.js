import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

const Chart = () => {
  const downUsers = useSelector(state => state.downloads);
  const formatDate = dateString => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const { downloads, timeRange } = downUsers;

  return (
    <Row className="box-shadow mt-5 mx-1">
      <Line
        data={{
          labels: timeRange.map(date => formatDate(date)),
          datasets: [
            {
              label: 'Unique Users',
              data: downloads.map(user => user.nrUniqUsers),
              backgroundColor: '#5788e46e',
            },
          ],
        }}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </Row>
  );
};

export default Chart;
