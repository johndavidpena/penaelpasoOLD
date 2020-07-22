import { useState } from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import ToolsStyles from '../../stylesheets/Tools.module.css';
import StrengthOfOffer from './strengthofoffer';
import HomeValue from './homevalue';

const Tools = () => {
  const [showStrength, setShowStrength] = useState(false);
  const [showValue, setShowValue] = useState(false);

  return (
    <>
      <Head>
        <title>Peña El Paso - Tools</title>
      </Head>

      <NextSeo
        title='Peña El Paso - Tools'
        description='Peña El Paso serves buyers, sellers, and investors in the greater El Paso area.'
        canonical='https://penaelpaso.com/tools/index'
      />

      <div className={ToolsStyles.tools}>
        {/* TODO: Create drop down accordions */}
        <div className={ToolsStyles.buyers}>
          <div className={ToolsStyles.top}>
            <h1>Buyer Tools</h1>
          </div>
          {/* <p>Strength of Offer Calculator</p> */}
        </div>

        <div className={ToolsStyles.sellers}>
          <div className={ToolsStyles.top}>
            <h1>Seller Tools</h1>
          </div>
          {/* <p>Home Value Request</p> */}
        </div>
      </div>
    </>
  );
}

export default Tools;
