import CardStyles from './Cards.module.css';
import Link from '../Link.js';

const CardOne = props => (
  <div className={CardStyles.cardOne}>
    <div className={CardStyles.cardOneTop}>
      <h2>{props.title}</h2>
      <img src={props.iconUrl} alt='buyer, seller, investor icons' />
    </div>
    <div className={CardStyles.cardOneBottom}>
      <p>{props.text1}</p>
      {/* <Link href='/contact'> */}
      <Link href={props.buttonLink}>
        <button>
          <a>{props.buttonText}</a>
        </button>
      </Link>
      {/* <button>{props.buttonText}</button> */}
    </div>
  </div>
);

export default CardOne;
