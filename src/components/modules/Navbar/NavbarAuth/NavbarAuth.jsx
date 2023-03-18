import { NavLink } from 'react-router-dom';

import s from '../navbar.module.css';

const NavbarAuth = () => {
  return (
    <div className={s.menu}>
      <NavLink className={s.link} to="/register">
        Register
      </NavLink>
      <NavLink className={s.link} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
