import './Menu.css';
import Logo from './logo.png';
import { Button } from '../';
function Menu({ show }) {
  return (
    <div className={show ? 'menu menu-show' : 'menu'}>
      <div className='menu-wrapper'>
        <div className='menu-logo'>
          <img src={Logo} alt='logo' />
        </div>
      </div>

      <div className='menu-body'>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
        </ul>
      </div>
      <div className='menu-btn'>
        <Button text={'Request a quote'} path='projects' />
      </div>
    </div>
  );
}

export default Menu;
