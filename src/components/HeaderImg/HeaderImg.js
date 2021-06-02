import './HeaderImg.css';
import Avatar from './Avatar.png';

function HeaderImg() {
  return (
    <div className='header-img'>
      <img src={Avatar} alt='Avatar' />
      <div className='avatar-side' />
    </div>
  );
}

export default HeaderImg;
