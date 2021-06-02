import './Header.css';
import { useEffect, useState } from 'react';
import {
  Nav,
  MobileNav,
  Message,
  BottomAvatar,
  HeaderImg,
  Social,
  ScrollDown,
  Decoration,
} from '../';
function Header({ menuShow, setMenuShow }) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);

  const resizeListener = () =>
    setIsMobile(window.innerWidth < 1024 ? true : false);

  useEffect(() => {
    window.addEventListener('resize', resizeListener);

    return () => window.removeEventListener('resize', resizeListener);
  }, []);
  return (
    <section id='header'>
      {/* <DotsAvatar /> */}
      {isMobile ? (
        <MobileNav menuShow={menuShow} setMenuShow={setMenuShow} />
      ) : (
        <Nav />
      )}
      <Message />
      <BottomAvatar />
      <HeaderImg />
      <Social />
      <ScrollDown />
      <Decoration />
    </section>
  );
}

export default Header;
