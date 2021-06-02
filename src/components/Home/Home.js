import './Home.css';
import { useState } from 'react';
import { Header, About, Footer, Gallery2, Menu } from '../';

/**
 *@author James Muhoro
 * This functions returns the major components of the home page
 * @returns Component
 */
function Home() {
  const [menuShow, setMenuShow] = useState(false);
  return (
    <div className='container'>
      <Header menuShow={menuShow} setMenuShow={setMenuShow} />
      <Menu show={menuShow} />
      <About />
      <Gallery2 />
      <Footer />
    </div>
  );
}

export default Home;
