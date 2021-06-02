import './Logo.css';
import LogoImg from './logo.png';
function Logo() {
  return (
    <div className='logo'>
      <div className='logo-image'>
        <img src={LogoImg} alt='logo' />
      </div>
      <div className='logo-text'>
        <h1>
          <span className='underline'>EcoTech</span> <span>Builders</span>
        </h1>
      </div>
    </div>
  );
}

export default Logo;
