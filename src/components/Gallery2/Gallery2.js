import './Gallery2.css';
import house1 from './house1.png';
import house2 from './house2.png';
import house3 from './house3.png';
import house4 from './house4.png';
import house5 from './house5.png';
import house6 from './house6.png';
import pIcon from './product-icon.svg';

function Gallery2() {
  return (
    <div className='gallery-2'>
      <h1>
        <span>
          <img src={pIcon} alt='project icon' height='30px' />
        </span>
        <span>Projects</span>
      </h1>
      <div className='gallery-2-wrapper'>
        <div className='gallery-image'>
          <img src={house1} alt='house' />
          <div className='text'>
            <p>Project details {'->'}</p>
          </div>
        </div>
        <div className='gallery-image'>
          <img src={house2} alt='house' />
          <div className='text'>
            <p>Project details {'->'}</p>
          </div>
        </div>
        <div className='gallery-image'>
          <img src={house3} alt='house' />
          <div className='text'>
            <p>Project details {'->'}</p>
          </div>
        </div>
        <div className='gallery-image'>
          <img src={house4} alt='house' />
          <div className='text'>
            <p>Project details {'->'}</p>
          </div>
        </div>
        <div className='gallery-image'>
          <img src={house5} alt='house' />
          <div className='text'>
            <p>Project details {'->'}</p>
          </div>
        </div>
        <div className='gallery-image'>
          <img src={house6} alt='house' />
          <div className='text'>
            <p>Project details {'->'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery2;
