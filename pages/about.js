import { useState, useEffect } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useWindowSize } from '../hooks/useWindowSize';
import AboutStyles from '../stylesheets/About.module.css';

const About = () => {
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
        <title>Peña El Paso | About John Peña</title>
      </Head>

      <NextSeo
        title='Peña El Paso | About John Peña'
        description='John Peña is the owner of Peña El Paso. He is a dedicated and trusted realtor in the greater El Paso area. As a former educator turned real estate agent, he understands how to communicate and work tirelessly on your behalf.'
        canonical='https://penaelpaso.com/about'
      />

      <div className={AboutStyles.about}>

        {screenSize === 'mobile' && (
          <div className={AboutStyles.image}>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597529025/Pe%C3%B1a%20El%20Paso/john-pena-headshot-m.jpg' alt='john-pena-headshot' title='john-pena-headshot' />
          </div>
        )}

        {screenSize === 'desktop' && (
          <div className={AboutStyles.image}>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597529025/Pe%C3%B1a%20El%20Paso/john-pena-headshot-d.jpg' alt='john-pena-headshot' title='john-pena-headshot' />
          </div>
        )}

        <div className={AboutStyles.text}>
          <h1>John Peña</h1>
          <p>John Peña is a trusted and passionate realtor in the greater El Paso area. A member of the Greater El Paso Association of Realtors, John works with individuals, families, and investors interested in the city’s most coveted properties - with a particular focus on the West side, Kern Place, and the Upper Valley neighborhoods.</p>
          <br />
          <p>As a former educator, John is well versed in working with all types of personalities and perspectives. Educating buyers and sellers on every aspect of a transaction is a top priority. He earns the respect and trust of clients by working tirelessly on their behalf and by always offering them competent and candid advice.  With a background in web development, John utilizes the latest trends in technology to provide clients with the best buying and selling experience possible.</p>
          <br />
          <p>One of the many reasons he joined EXP Realty is because of their commitment to the best technology offered in the industry.  John is deeply connected to El Paso and Texas. He was born outside of Dallas and grew up in New Caney, a small town outside of Houston. El Paso is home where he is active in numerous local organizations and social groups. When he isn’t working, he enjoys hiking, brazilian jiu jitsu, traveling, and spending time with his family and friends.  John can be reached at (915)355-3477 or email him at john@penaelpaso.com.</p>
        </div>
      </div>
    </>
  );
}

export default About;
