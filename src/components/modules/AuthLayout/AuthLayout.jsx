import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrent } from 'redux/auth/auth-operations';

export const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return <>{children}</>;
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
