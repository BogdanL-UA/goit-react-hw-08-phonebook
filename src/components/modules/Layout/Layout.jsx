import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

import styles from './layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
