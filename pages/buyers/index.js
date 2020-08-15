import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useWindowSize } from '../../hooks/useWindowSize';
import { NextSeo } from 'next-seo';
import IndexStyles from '../../stylesheets/Index.module.css';
import BuyerStyles from '../../stylesheets/Buyers.module.css';
import BuyersGuide from './BuyersGuide';

const Buyers = () => {
  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (width <= 640) {
      setScreenSize('mobile');
    } else if (width > 640) {
      setScreenSize('desktop');
    }
    // TODO: Clean up hook below to avoid memory leak
    return () => { };
  }, [width]);

  return (
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

      {screenSize === 'mobile' && (
        <div className={BuyerStyles.placeholder}>
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597529976/Pe%C3%B1a%20El%20Paso/john-pena-suit-m.jpg' alt='john-pena-suit' title='john-pena-suit' />
        </div>
      )}

      {screenSize === 'desktop' && (
        <div className={BuyerStyles.placeholder}>
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597529983/Pe%C3%B1a%20El%20Paso/john-pena-suit-d.jpg' alt='john-pena-suit' title='john-pena-suit' />
        </div>
      )}
    </>
  );
}

export default Buyers;

