'use client';

import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import store from '@/redux/store';

function Providers({ children }) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default Providers;

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};