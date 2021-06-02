import './Error.css';
import { Logo, Button2 } from '../';
import e404 from './404.svg';
function Error() {
  return (
    <div className='error-page'>
      <div className='error-nav'>
        <Logo />
      </div>
      <div className='error-body'>
        <div className='message-404'>
          <img src={e404} alt='error' />
          <p>Error 404: This page does not exist </p>
        </div>
      </div>
      <div className='error-home'>
        <Button2 text={'Take me Home'} path={''} spaces={[20, 100]} />
      </div>
    </div>
  );
}

export default Error;
