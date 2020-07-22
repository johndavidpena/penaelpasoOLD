import Head from 'next/head';
import { NextSeo } from 'next-seo';
import IndexStyles from '../../stylesheets/Index.module.css';
import BuyerStyles from '../../stylesheets/Buyers.module.css';

const Sellers = () => (
  <>
    <Head>
      <title>Peña El Paso - Sellers</title>
    </Head>

    <NextSeo
      title='Peña El Paso - Sellers'
      description='Peña El Paso serves buyers, sellers, and investors in the greater El Paso area.'
      canonical='https://penaelpaso.com/sellers/index'
    />

    <div className={IndexStyles.pageContainer}>
      <h1 className={BuyerStyles.heading}>Welcome Sellers</h1>

      <h2 className={BuyerStyles.subHeading}>COMING SOON!</h2>

      <div className={BuyerStyles.placeholder}>
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1595342727/whiteShirtJohn.jpg' alt='me sitting on stairs' />
      </div>
    </div>
  </>
);

export default Sellers;
