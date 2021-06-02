import './SingleProject.css';
import { Link } from 'react-router-dom';

function SingleProject({ image, gridSettings, back }) {
  return (
    <div className='single-project' style={gridSettings}>
      <div className='single-image'>
        <img src={image} alt='projects gallery' />
      </div>
      <p className='single-btn' style={{ background: back }}>
        <Link to='/projects'>
          <span>View project</span>
          <span>{'->'}</span>
        </Link>
      </p>
    </div>
  );
}

export default SingleProject;
