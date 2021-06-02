import './Nav.css';
import { Button, Logo } from '../';
function Nav() {
  return (
    <nav className='navbar-header'>
      <div className='nav-logo'>
        <Logo />
      </div>
      <div className='center'>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
        </ul>
      </div>
      <div className='right'>
        <p>chat us +</p>
        <Button text='Request a quote' path='projects' />
      </div>
    </nav>
  );
}

export default Nav;
