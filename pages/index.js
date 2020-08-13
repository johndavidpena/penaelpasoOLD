import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Link from '../components/Link.js';
import IndexStyles from '../stylesheets/Index.module.css';
import '../components/Translate';
import CardOne from '../components/Cards/CardOne';
// import Map from '../components/Map';

const mapProps = {
  options: {
    center: { lat: 31.772543, lng: -106.460953 },
    zoom: 12,
  }
}

export default () => {
  return (
    <>
      <Head>
        <title>Peña El Paso</title>
      </Head>

      <NextSeo
        title='Peña El Paso - Real Estate Services'
        description='Peña El Paso serves buyers, sellers, and investors in the greater El Paso area. We go above and beyond for all of our clients to make sure that they get the absolute best service in the industry. If you need any real estate services, contact Peña El Paso.'
        canonical='https://penaelpaso.com/'
      />

      <div className={IndexStyles.pageOne}>
        <div className={IndexStyles.pageContainer}>
          {/* TODO: Slide in the div below */}
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

      {/* TODO: On scroll, slide in content */}
      <div className={IndexStyles.pageTwo}>
        <div className={IndexStyles.PTheading}>
          <h2>Serving All of Your Needs</h2>
        </div>

        <div className={IndexStyles.cardGrid}>
          {/* TODO: On scroll, rotate icon maybe */}
          <CardOne title='Buyers' iconUrl='https://res.cloudinary.com/mimas-music/image/upload/v1589493154/Pe%C3%B1a%20El%20Paso/96circleLightBlue.png' text1='Buying your first home or your next home, let us help you find your dream home!' buttonText='More Info' buttonLink='' />
          <CardOne title='Sellers' iconUrl='https://res.cloudinary.com/mimas-music/image/upload/v1589493154/Pe%C3%B1a%20El%20Paso/96circleLightBlue.png' text1='Selling your home is a big decision, let Peña El Paso take care of all the details along the way.' buttonText='More Info' buttonLink='' />
          <CardOne title='Investors' iconUrl='https://res.cloudinary.com/mimas-music/image/upload/v1589493154/Pe%C3%B1a%20El%20Paso/96circleLightBlue.png' text1='El Paso is an up and coming market with a cost of living that is attracting new residents.' buttonText='More Info' buttonLink='' />
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
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1589758552/Pe%C3%B1a%20El%20Paso/coupled.png' alt="beautiful kitchen" />
          </div>
        </div>
      </div>

      {/* <div className={IndexStyles.pageFour}>
        <Map {...mapProps} />
      </div> */}
    </>
  );
}
