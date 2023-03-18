import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import s from '../navbar.module.css';

const NavbarUser = () => {
  const email = useSelector(({ auth }) => auth.user.email);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.menu}>
      <p className={s.text}>{email}</p>
      <button className={s.btn} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
