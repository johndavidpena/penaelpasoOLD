import Link from '../Link.js';
import NavStyles from './Navigation.module.css';

const DeskNav = () => (
  <div className={NavStyles.DeskNav}>
    <div className={NavStyles.logo}>
      <Link href='/'>
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1591641576/Pe%C3%B1a%20El%20Paso/720checkeredOrange.png' alt="Peña El Paso logo" />
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
