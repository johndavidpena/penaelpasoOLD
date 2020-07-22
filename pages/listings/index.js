import Head from 'next/head';
import { NextSeo } from 'next-seo';
import ListingStyles from '../../stylesheets/Listings.module.css';

const Listings = () => (
  <>
    <Head>
      <title>Peña El Paso - Listings</title>
    </Head>

    <NextSeo
      title='Peña El Paso - Listings'
      description='Peña El Paso serves buyers, sellers, and investors in the greater El Paso area.'
      canonical='https://penaelpaso.com/listings/index'
    />

    <div className={ListingStyles.pageOne}>
      <div className={ListingStyles.pageContainer}>

        <div className={ListingStyles.POheading}>
          <h1>Search for</h1>
          <h1>homes in</h1>
          <h1>El Paso.</h1>

          <div className={ListingStyles.PObuttonContainer}>
            <button className={ListingStyles.PObutton1}>Check Out <span>&#8594;</span></button>

            <button className={ListingStyles.PObutton2}>
              <a href='https://johnpena.kw.com/' target='_blank'>JOHNPENA.KW.COM</a>
            </button>
          </div>
        </div>

      </div>
    </div>
  </>
);

export default Listings;
