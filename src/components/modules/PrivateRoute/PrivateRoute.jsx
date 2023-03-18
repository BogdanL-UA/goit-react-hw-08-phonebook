import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = () => {
  const getAuth = useSelector(({ auth }) => {
    const { isLogin, token } = auth;
    return { isLogin, token };
  });

  if (!getAuth.isLogin && getAuth.token) {
    return <p>...Loading</p>;
  }

  if (!getAuth.isLogin && !getAuth.token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
