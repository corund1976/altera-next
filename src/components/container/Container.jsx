import PropTypes from 'prop-types';

import s from './container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}
export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
