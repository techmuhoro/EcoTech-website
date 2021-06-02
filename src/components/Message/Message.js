import './Message.css';
import { Button } from '../';
function Message() {
  return (
    <div className='welcome-message'>
      <h1>We turn your dreams</h1>
      <h1>Into a home</h1>
      <div className='msg-btn'>
        <Button auto text={'View Latest projects'} path={'projects'} />
      </div>
    </div>
  );
}

export default Message;
