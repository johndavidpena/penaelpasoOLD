import Head from 'next/head';
import { NextSeo } from 'next-seo';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import VideoStyles from '../../../stylesheets/Video.module.css';

const Post004 = () => (
  <>
    <Head>
      <title>Peña El Paso - Blog</title>
    </Head>

    <NextSeo
      title='Peña El Paso - Blog'
      description='Peña El Paso serves buyers, sellers, and investors in the greater El Paso area.'
      canonical='https://penaelpaso.com/blog/004'
    />

    <div className={BlogStyles.blog}>
      <div className={BlogStyles.post}>
        <div className={VideoStyles.container}>
          <div className={VideoStyles.videoResponsive}>
            <iframe title='Top 5 Reasons Why We Moved to El Paso Texas' width="560" height="315" src='https://www.youtube.com/embed/MqKJ3L8XDVA' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div className={BlogStyles.postTitle}>
          <h1>Top 5 Reasons Why We Moved to El Paso Texas</h1>
          <span>July 20, 2020</span>
        </div>

        <p>We love El Paso, check out the video to see some of the many reasons why we chose to relocate here.</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </>
);

export default Post004;
