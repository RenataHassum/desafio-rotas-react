import { NavLink } from 'react-router-dom';
import homeImg from '../../assets/home.svg';
import './styles.css';

export default function Header() {
  return (
    <header className='navcontainer'>
      <nav className="navbar container">
        <div>
          <NavLink to="/" className='navitems'>Início</NavLink>
          <NavLink to="/" className='navitems'>Produtos</NavLink>
          <NavLink to="/" className='navitems'>Sobre nós</NavLink>
        </div>
        <img src={homeImg} alt="Home" />
      </nav>
    </header>
  );
}
