import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { useSelector } from 'react-redux';

const Navbar = () => {
  const isLogin = useSelector(store => store.auth.isLogin);

  return (
    <div>
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

export default Navbar;
