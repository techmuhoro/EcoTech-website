import './About.css';
import aboutIcon from './about-vector.svg';
import topVector from './top-vector.svg';
import drawing from './drawing.svg';
import { Button2 } from '../';
function About() {
  return (
    <div className='about'>
      <h1 className='about-heading'>
        <img src={aboutIcon} alt='question-icon' />
        <span>ABOUT US</span>
      </h1>

      <div className='about-body'>
        <div className='left'>
          <h1>
            We are a buildind and construction entity with over 10 year in the
            market
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            ratione eaque ut est earum fugiat exercitationem molestias at dolor
            mollitia, quo nulla aperiam perferendis nostrum iusto inventore
            possimus id. Odio, quos, est expedita unde dignissimos quidem nulla
            quia, ducimus rem quis tenetur obcaecati doloremque omnis voluptate
            commodi explicabo. Unde, officia. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Libero ratione eaque ut est earum
            fugiat exercitationem molestias at dolor mollitia, quo nulla aperiam
            perferendis nostrum iusto inventore possimus id. Odio, quos, est
            expedita unde dignissimos quidem nulla quia, ducimus rem quis
            tenetur obcaecati doloremque omnis voluptate commodi explicabo.
            Unde, officia.
          </p>
        </div>
        <div className='right'>
          <img src={drawing} alt='drawing' />
        </div>
      </div>
      <div className='about-button'>
        <Button2 text={'Contact us'} path={'projects'} spaces={[15, 50]} />
      </div>
      <div className='deco-vector'>
        <img src={topVector} alt='decoration vector' />
      </div>
    </div>
  );
}

export default About;
