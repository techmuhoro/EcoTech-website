import { Logo } from '../';
import './MobileNav.css';
function MobileNav({ menuShow, setMenuShow }) {
  return (
    <div className='mobile-nav'>
      <div className='mobile-logo'>
        <Logo />
      </div>
      <div className='hamburger' onClick={() => setMenuShow(!menuShow)}>
        <span>
          <i className={menuShow ? 'fas fa-times' : 'fas fa-bars'}></i>
        </span>
      </div>
    </div>
  );
}

export default MobileNav;
