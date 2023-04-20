import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink
            to="/"
            className={css.link}
            style={({ isActive }) =>
              isActive
                ? {
                    color: '#2db2ff',
                  }
                : { color: '#ffffff' }
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={css.link}
            style={({ isActive }) =>
              isActive
                ? {
                    color: '#2db2ff',
                  }
                : { color: '#ffffff' }
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
