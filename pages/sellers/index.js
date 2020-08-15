import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useWindowSize } from '../../hooks/useWindowSize';
import { NextSeo } from 'next-seo';
import IndexStyles from '../../stylesheets/Index.module.css';
import BuyerStyles from '../../stylesheets/Buyers.module.css';

const Sellers = () => {
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

        {screenSize === 'mobile' && (
          <div className={BuyerStyles.placeholder}>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597529717/Pe%C3%B1a%20El%20Paso/john-pena-white-shirt-m.jpg' alt='john-pena-white-shirt' title='john-pena-white-shirt' />
          </div>
        )}

        {screenSize === 'desktop' && (
          <div className={BuyerStyles.placeholder}>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597529717/Pe%C3%B1a%20El%20Paso/john-pena-white-shirt-d.jpg' alt='john-pena-white-shirt' title='john-pena-white-shirt' />
          </div>
        )}
      </div>
    </>
  );
}

export default Sellers;
