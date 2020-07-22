import Head from 'next/head';
import { NextSeo } from 'next-seo';
import EliteStyles from '../../stylesheets/Elite.module.css';

const Elite = () => (
  <>
    <Head>
      <title>Peña El Paso - Elite</title>
    </Head>

    <NextSeo
      title='Peña El Paso - Elite'
      description='Peña El Paso serves buyers, sellers, and investors in the greater El Paso area.'
      canonical='https://penaelpaso.com/elite/index'
    />

    <div className={EliteStyles.Elite}>
      <h1>Elite Homes of El Paso</h1>

      <div className={EliteStyles.EliteGrid}>
        <div className={EliteStyles.EliteHome}>
          <div className={EliteStyles.EliteHomeTop}>
            <img src='https://cdn.resize.sparkplatform.com/gep/1600x1200/true/20200415225005508668000000-o.jpg' alt="1" />
          </div>

          <div className={EliteStyles.EliteHomeBottom}>
            <h2 className={EliteStyles.EHtitle}>Modern Luxury</h2>
            <div className={EliteStyles.EHsummary}>
              <div className={EliteStyles.EHaddress}>
                <h3>371 Rocky Pointe Drive</h3>
                <h3>El Paso, TX., 79912</h3>
              </div>
              <h4 className={EliteStyles.EHprice}>$1,540,000 USD</h4>
            </div>
            <p className={EliteStyles.EHdescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, illo sed iste quia ea architecto esse numquam beatae dolor aspernatur vitae error maiores! Eum amet non deleniti necessitatibus quam neque.</p>
            <p className={EliteStyles.EHdescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, illo sed iste quia ea architecto esse numquam beatae dolor aspernatur vitae error maiores! Eum amet non deleniti necessitatibus quam neque.</p>
          </div>
        </div>

        <div className={EliteStyles.EliteHome}>
          <img src='https://cdn.resize.sparkplatform.com/gep/1600x1200/true/20200220200845400985000000-o.jpg' alt="3" />
          <h2 className={EliteStyles.EHtitle}>Hidden Bliss</h2>
          <div className={EliteStyles.EHsummary}>
            <div className={EliteStyles.EHaddress}>
              <h3>878 Cortona Place</h3>
              <h3>El Paso, TX., 79928</h3>
            </div>
            <h4 className={EliteStyles.EHprice}>$1,550,000 USD</h4>
          </div>
          <p className={EliteStyles.EHdescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, illo sed iste quia ea architecto esse numquam beatae dolor aspernatur vitae error maiores! Eum amet non deleniti necessitatibus quam neque.</p>
        </div>

        <div className={EliteStyles.EliteHome}>
          <img src='https://cdn.resize.sparkplatform.com/gep/1600x1200/true/20190415020015550199000000-o.jpg' alt="4" />
          <h2 className={EliteStyles.EHtitle}>Sheer Beauty</h2>
          <div className={EliteStyles.EHsummary}>
            <div className={EliteStyles.EHaddress}>
              <h3>324 Wild Willow Drive</h3>
              <h3>El Paso, TX., 79922</h3>
            </div>
            <h4 className={EliteStyles.EHprice}>$1,350,000 USD</h4>
          </div>
          <p className={EliteStyles.EHdescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, illo sed iste quia ea architecto esse numquam beatae dolor aspernatur vitae error maiores! Eum amet non deleniti necessitatibus quam neque.</p>
        </div>

        <div className={EliteStyles.EliteHome}>
          <img src='https://cdn.resize.sparkplatform.com/gep/1600x1200/true/20200131173103254733000000-o.jpg' alt="2" />
          <h2 className={EliteStyles.EHtitle}>Spacious Solitude</h2>
          <div className={EliteStyles.EHsummary}>
            <div className={EliteStyles.EHaddress}>
              <h3>748 Camino Real Avenue</h3>
              <h3>El Paso, TX., 79922</h3>
            </div>
            <h4 className={EliteStyles.EHprice}>$3,500,000 USD</h4>
          </div>
          <p className={EliteStyles.EHdescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, illo sed iste quia ea architecto esse numquam beatae dolor aspernatur vitae error maiores! Eum amet non deleniti necessitatibus quam neque.</p>
        </div>
      </div>
    </div>
  </>
);

export default Elite;
