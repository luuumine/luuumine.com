import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <header className='navbar'>
      <h1 className='logo'>
        <Link to='/'>~</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='/about'>/about</Link>
          </li>
          <li>
            <Link to='/contact'>/contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
