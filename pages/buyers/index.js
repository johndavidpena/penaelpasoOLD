import Head from 'next/head';
import { NextSeo } from 'next-seo';
import IndexStyles from '../../stylesheets/Index.module.css';
import BuyerStyles from '../../stylesheets/Buyers.module.css';
import BuyersGuide from './BuyersGuide';

const Buyers = () => (
  <>
    <Head>
      <title>Peña El Paso - Buyers</title>
    </Head>

    <NextSeo
      title='Peña El Paso - Buyers'
      description='Peña El Paso serves buyers, sellers, and investors in the greater El Paso area.'
      canonical='https://penaelpaso.com/buyers/index'
    />

    {/* <div className={IndexStyles.pageContainer}>
      <BuyersGuide />
    </div> */}
    <h1 className={BuyerStyles.heading}>Welcome Buyers</h1>

    <h2 className={BuyerStyles.subHeading}>COMING SOON!</h2>

    <div className={BuyerStyles.placeholder}>
      <img src='https://res.cloudinary.com/mimas-music/image/upload/v1595345074/SuitBROWNbackground1200x1800.jpg' alt='me casually leaning' />
    </div>
  </>
);

export default Buyers;

