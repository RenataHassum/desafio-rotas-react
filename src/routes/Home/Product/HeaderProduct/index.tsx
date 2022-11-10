import { NavLink } from 'react-router-dom';
import './styles.css';

export default function HeaderProduct() {
  return (
    <header className="sub-navcontainer">
      <nav className="sub-navbar container">
        <div>
          <NavLink
            to="/products/computers"
            className={({ isActive }) =>
              isActive ? 'sub-navitems sub-nav-active' : 'sub-navitems'
            }
          >
            Computadores
          </NavLink>
          <NavLink
            to="/products/electronics"
            className={({ isActive }) =>
              isActive ? 'sub-navitems sub-nav-active' : 'sub-navitems'
            }
          >
            Eletrônicos
          </NavLink>
          <NavLink
            to="/products/books"
            className={({ isActive }) =>
              isActive ? 'sub-navitems sub-nav-active' : 'sub-navitems'
            }
          >
            Livros
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
