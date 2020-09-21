import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { NextSeo } from 'next-seo';
import Link from '../components/Link.js';
import IndexStyles from '../stylesheets/Index.module.css';
import '../components/Translate';
import CardOne from '../components/Cards/CardOne';
// import Map from '../components/Map';

// const mapProps = {
//   options: {
//     center: { lat: 31.772543, lng: -106.460953 },
//     zoom: 12,
//   }
// }

export default () => {
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
        <title>El Paso Real Estate | Peña El Paso</title>
      </Head>

      <NextSeo
        title='El Paso Real Estate | Peña El Paso'
        description='Peña El Paso is the premier real estate service for buyers, sellers, and investors in El Paso, Texas. Your real estate needs are our highest priority. We specialize in relocating buyers and helping sellers get the most for their listing. Let us go above and beyond for all of your real estate needs in El Paso.'
        canonical='https://penaelpaso.com/'
        openGraph={{
          url: 'https://penaelpaso.com/',
          title: 'El Paso Real Estate | Peña El Paso',
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

      <div className={IndexStyles.pageOne}>
        <div className={IndexStyles.pageContainer}>
          <div className={IndexStyles.POheading}>
            <h1>Find your</h1>
            <h1>home in</h1>
            <h1>El Paso.</h1>

            <div className={IndexStyles.PObuttonContainer}>
              <button className={IndexStyles.PObutton1}>
                <a href='https://johnpena.exprealty.com/' target='_blank'>See Listings</a>
              </button>

              <Link href='/contact'>
                <button className={IndexStyles.PObutton2}>
                  <a>Contact Us</a>
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className={IndexStyles.pageTwo}>
        <div className={IndexStyles.PTheading}>
          <h2>Serving All of Your Needs</h2>
        </div>

        <div className={IndexStyles.cardGrid}>
          <CardOne title='Buyers' iconUrl='https://res.cloudinary.com/mimas-music/image/upload/v1600701371/Pe%C3%B1a%20El%20Paso/CircleCompleteLightBlue.png' text1='Buying your first home or your next home, let us help you find your dream home!' buttonText='More Info' buttonLink='/buyers' />
          <CardOne title='Sellers' iconUrl='https://res.cloudinary.com/mimas-music/image/upload/v1600701371/Pe%C3%B1a%20El%20Paso/CircleCompleteLightBlue.png' text1='Selling your home is a big decision, let Peña El Paso take care of all the details along the way.' buttonText='More Info' buttonLink='/sellers' />
          <CardOne title='Investors' iconUrl='https://res.cloudinary.com/mimas-music/image/upload/v1600701371/Pe%C3%B1a%20El%20Paso/CircleCompleteLightBlue.png' text1='El Paso is an up and coming market with a cost of living that is attracting new residents.' buttonText='More Info' buttonLink='/contact' />
        </div>
      </div>

      <div className={IndexStyles.pageThree}>
        <div className={IndexStyles.PTgrid}>
          <div className={IndexStyles.PThHeading}>
            <div className={IndexStyles.PThHeading}>
              <h2><span>Viva</span> El Paso</h2>
            </div>
            <p>El Paso is an extraordinary city that is full of life and passion. A great place to raise a young family or settle down in retirement. The city is affordable, friendly, and rich with arts and culture.</p>
            <br />
            <p>The city has a diverse collection of wonderful neighborhoods on both sides of the Franklin Mountains. Whatever it is that you and your family are looking for, let Peña El Paso serve you.</p>
          </div>

          <div className={IndexStyles.coupledContainer}>
            {screenSize === 'mobile' && (
              <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600702022/Pe%C3%B1a%20El%20Paso/beautiful-kitchen-m400.jpg' alt='beautiful-kitchen' title='beautiful-kitchen' />
            )}

            {screenSize === 'desktop' && (
              <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600702022/Pe%C3%B1a%20El%20Paso/beautiful-kitchen-d700.jpg' alt="beautiful-kitchen" title="beautiful-kitchen" />
            )}
          </div>
        </div>
      </div>

      {/* <div className={IndexStyles.pageFour}>
        <Map {...mapProps} />
      </div> */}
    </>
  );
}
