import './Button.css';
import { Link } from 'react-router-dom';
function Button({ text, path }) {
  return (
    <div className='project-button'>
      <Link to={`/${path}`}>{text}</Link>
    </div>
  );
}

export default Button;
