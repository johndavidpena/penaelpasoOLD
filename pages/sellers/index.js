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
        <title>El Paso Real Estate - Sellers | Peña El Paso</title>
      </Head>

      <NextSeo
        title='El Paso Real Estate - Sellers | Peña El Paso'
        description='Peña El Paso is the premier real estate service for buyers, sellers, and investors in El Paso, Texas. Your real estate needs are our highest priority. We specialize in relocating buyers and helping sellers get the most for their listing. Let us go above and beyond for all of your real estate needs in El Paso.'
        canonical='https://penaelpaso.com/sellers/index'
        openGraph={{
          url: 'https://penaelpaso.com/sellers/index',
          title: 'El Paso Real Estate - Sellers | Peña El Paso',
          description: 'Peña El Paso is the premier real estate service for buyers, sellers, and investors in El Paso, Texas. Your real estate needs are our highest priority. We specialize in relocating buyers and helping sellers get the most for their listing. Let us go above and beyond for all of your real estate needs in El Paso.',
          images: [
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1596766317/Pe%C3%B1a%20El%20Paso/720BLACKevenedOUT.png',
              width: 720,
              height: 720,
              alt: 'El Paso Real Estate - Peña El Paso logo',
            },
            // {
            //   url: 'https://www.example.ie/og-image-02.jpg',
            //   width: 900,
            //   height: 800,
            //   alt: 'Og Image Alt Second',
            // },
            // { url: 'https://www.example.ie/og-image-03.jpg' },
            // { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
        }}
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
