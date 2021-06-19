import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <div>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,

};
export default Layout;
