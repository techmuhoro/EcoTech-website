import './Button2.css';
import { Link } from 'react-router-dom';
function Button2({ text, path, spaces }) {
  return (
    <div className='project-button2'>
      <Link
        style={{ padding: `${spaces[0]}px ${spaces[1]}px` }}
        to={`/${path}`}
      >
        {text}
      </Link>
    </div>
  );
}

export default Button2;
