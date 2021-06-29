import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../components/layout';
import Title from '../components/Title';
import ChartNav from '../components/ChartNav';
import ChartFilter from '../components/chartFilter/ChartFilter';
import Chart from '../components/chart/chart';
import { getDowloads } from '../redux/downloadsReducer/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDowloads());
  }, []);
  return (
    <Layout>
      <Title title="Dashboard" />
      <ChartNav />
      <ChartFilter />
      <Chart />
    </Layout>
  );
};

export default Dashboard;
