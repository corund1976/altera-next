'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Portal({ children }) {
  const [container] = useState(() =>
    typeof window !== 'undefined' ? document.createElement('div') : null,
  );

  useEffect(() => {
    if (!document) return;

    if (container) document.body.appendChild(container);

    return () => {
      if (container) document.body.removeChild(container);
    };
  }, [container]);

  return container ? createPortal(children, container) : null;
}

export default Portal;

Portal.propTypes = {
  children: PropTypes.node.isRequired,
};
