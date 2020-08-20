import Head from 'next/head';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import ContactStyles from '../stylesheets/Contact.module.css';
import ContactForm from '../components/Forms/ContactForm';

const Contact = () => {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      <Head>
        <title>Peña El Paso - Contact</title>
      </Head>

      <NextSeo
        title='Peña El Paso | Contact Us for All Your Real Estate Needs'
        description='Peña El Paso serves buyers, sellers, and investors in the greater El Paso area. Contact John Peña, your trusted realtor in El Paso.'
        canonical='https://penaelpaso.com/contact'
      />

      <div className={ContactStyles.contact}>
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1589400490/Pe%C3%B1a%20El%20Paso/narrowKitchen.jpg' alt='luxury-kitchen' title='luxury-kitchen' />

        {showForm && (
          <div className={ContactStyles.form}>
            <h1>Contact Us</h1>
            <ContactForm showForm={showForm} setShowForm={setShowForm} />
          </div>
        )}

        {!showForm && (
          <div className={ContactStyles.thankyou}>
            <h2>Thank You</h2>
            <p>Someone from our team will get back to you soon!</p>
            <p>You can also get in touch with us immediately by clicking the Facebook Messenger icon in the lower right corner of your screen.</p>
          </div>
        )}

      </div>
    </>
  );
}

export default Contact;
