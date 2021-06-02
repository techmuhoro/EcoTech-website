import './Footer.css';
import { useState } from 'react';

function Footer() {
  const [date] = useState(() => new Date().getFullYear());
  return (
    <footer className='footer'>
      <div className='footer-body'>
        <div className='footer-right'>
          <p>EcoTech inc</p>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Security</li>
          </ul>
        </div>
        <div className='footer-left'>
          <p>Quick links</p>
          <ul>
            <li>Blog</li>
            <li>Instgram</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <p className='footer-bottom'>
        &copy; All rigths reserved {date} EchoTech inc.
      </p>
    </footer>
  );
}

export default Footer;
