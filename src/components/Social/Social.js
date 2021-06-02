import './Social.css';
import twitter from './twitter.svg';
import facebook from './facebook.svg';
import instagram from './instagram.svg';

function Social() {
  return (
    <div className='social-icons'>
      <div className='icons-wrapper'>
        <img src={twitter} alt='Twitter icon' />
        <img src={instagram} alt='Instagram icon' />
        <img src={facebook} alt='Facebook icon' />
      </div>
      <div className='social-bottom' />
    </div>
  );
}

export default Social;
