import { NavLink } from 'react-router-dom';
import homeImg from '../../assets/home.svg';
import './styles.css';

export default function Header() {
  return (
    <header className="navcontainer">
      <nav className="navbar container">
        <div>
          <NavLink to="/" className="navitems">
            Início
          </NavLink>
          <NavLink to="/products" className="navitems">
            Produtos
          </NavLink>
          <NavLink to="/about" className="navitems">
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
