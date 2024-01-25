import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/catalog">Каталог</NavLink>
          <NavLink to="/favorites">Избранное</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
