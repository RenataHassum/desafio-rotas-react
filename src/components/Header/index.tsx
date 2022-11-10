import { NavLink } from 'react-router-dom';
import homeImg from '../../assets/home.svg';
import './styles.css';

export default function Header() {
  return (
    <header className="navcontainer">
      <nav className="navbar container">
        <div>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? 'navitems nav-active' : 'navitems'
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? 'navitems nav-active' : 'navitems'
            }
          >
            Produtos
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'navitems nav-active' : 'navitems'
            }
          >
            Sobre nós
          </NavLink>
        </div>
        <NavLink to="/">
          <img src={homeImg} alt="Home" />
        </NavLink>
      </nav>
    </header>
  );
}
