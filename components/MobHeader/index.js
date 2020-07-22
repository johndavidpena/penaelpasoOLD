import { useRef } from 'react';
// import Link from 'next/link';
import Link from '../Link';
import MHStyles from './MH.module.css';
import Burger from '../Burger';
import SideMenu from '../SideMenu';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const Header = ({ open, setOpen }) => {
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <nav className={MHStyles.burger}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <SideMenu open={open} setOpen={setOpen} />
      </div>

      <div className={MHStyles.logo}>
        <Link href='/'>
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1591641576/Pe%C3%B1a%20El%20Paso/720checkeredOrange.png' alt="Peña El Paso logo" />
        </Link>
      </div>
    </nav>
  );
}

export default Header;