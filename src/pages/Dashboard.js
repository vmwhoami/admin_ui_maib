import React from 'react';
import Layout from '../components/layout';
import Title from '../components/Title';
import ChartNav from '../components/ChartNav';
import ChartFilter from '../components/chartFilter/ChartFilter';
import DownRes from '../components/downloadsResult/DownRes';

const Dashboard = () => (
  <Layout>
    <Title title="Dashboard" />
    <ChartNav />
    <ChartFilter />
    <DownRes />
  </Layout>
);

export default Dashboard;
