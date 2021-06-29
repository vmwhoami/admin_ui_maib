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
  const [start, end] = timeRange;
  const startDate = new Date(start);
  const endDate = new Date(end);

  const results = downloads.filter(d => {
    const date = new Date(d.date);

    if (start && end) {
      return startDate <= date && date <= endDate;
    }
    return d;
  });

  return (
    <Row className="box-shadow mt-5 mx-1 p-2">
      <Line
        data={{
          labels: results.map(users => formatDate(users.date)),
          datasets: [
            {
              label: 'Unique Users',
              data: downloads.map(user => user.nrUniqUsers),
              backgroundColor: '#9589e42e',
            },
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
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
