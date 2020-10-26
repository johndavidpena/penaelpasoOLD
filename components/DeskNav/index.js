import Link from '../Link.js';
import { LogoJsonLd } from 'next-seo';
import NavStyles from './Navigation.module.css';

const DeskNav = () => (
  <div className={NavStyles.DeskNav}>
    <div className={NavStyles.logo}>
      <Link href='/index'>
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597688173/Pe%C3%B1a%20El%20Paso/120BLACKonWHITE.jpg' alt='Peña-El-Paso-logo' title=' Peña-El-Paso-logo' />
        <LogoJsonLd
          logo="https://res.cloudinary.com/mimas-music/image/upload/v1597688173/Pe%C3%B1a%20El%20Paso/120BLACKonWHITE.jpg"
          url="https://penaelpaso.com"
        />
      </Link>
    </div>

    <div className={NavStyles.menuItems}>
      <Link href='/blog/index'>
        <div className={NavStyles.item}>
          <a>BLOG</a>
        </div>
      </Link>

      <Link href='/about'>
        <div className={NavStyles.item}>
          <a>ABOUT</a>
        </div>
      </Link>

      <Link href='/sellers/index'>
        <div className={NavStyles.item}>
          <a>SELLERS</a>
        </div>
      </Link>

      <Link href='/buyers/index'>
        <div className={NavStyles.item}>
          <a>BUYERS</a>
        </div>
      </Link>

      <Link href='/contact'>
        <div className={NavStyles.item}>
          <a>CONTACT</a>
        </div>
      </Link>
    </div>
  </div>
);

export default DeskNav;
