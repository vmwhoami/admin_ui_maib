import React from 'react';
import Layout from '../components/layout';
import Title from '../components/Title';
import ChartNav from '../components/ChartNav';
import ChartFilter from '../components/chartFilter/ChartFilter';

const Dashboard = () => (
  <Layout>
    <Title title="Dashboard" />
    <ChartNav />
    <ChartFilter />
  </Layout>
);

export default Dashboard;
