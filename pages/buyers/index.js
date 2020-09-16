import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useWindowSize } from '../../hooks/useWindowSize';
import { NextSeo } from 'next-seo';
import IndexStyles from '../../stylesheets/Index.module.css';
import BuyerStyles from '../../stylesheets/Buyers.module.css';
import BlogStyles from '../../stylesheets/Blog.module.css';
import VideoStyles from '../../stylesheets/Video.module.css';
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
    return () => { };
  }, [width]);

  return (
    <>
      <Head>
        <title>El Paso Real Estate - Buyers | Peña El Paso</title>
      </Head>

      <NextSeo
        title='El Paso Real Estate - Buyers | Peña El Paso'
        description='Peña El Paso is the premier real estate service for buyers, sellers, and investors in El Paso, Texas. Your real estate needs are our highest priority. We specialize in relocating buyers and helping sellers get the most for their listing. Let us go above and beyond for all of your real estate needs in El Paso.'
        canonical='https://penaelpaso.com/buyers/index'
        openGraph={{
          url: 'https://penaelpaso.com/buyers/index',
          title: 'El Paso Real Estate - Buyers | Peña El Paso',
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

      <div className={BlogStyles.blog}>
        <div className={BlogStyles.post}>
          <div className={VideoStyles.videoResponsive}>
            <iframe title='home buying costs' width="560" height="315" src="https://www.youtube.com/embed/8zaNaWdv-rg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <div className={IndexStyles.pageContainer}>
        <BuyersGuide />
      </div>
      {/* <h1 className={BuyerStyles.heading}>Welcome Buyers</h1>

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
      )} */}
    </>
  );
}

export default Buyers;

