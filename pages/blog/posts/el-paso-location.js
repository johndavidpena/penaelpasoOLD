import Head from 'next/head';
import { NextSeo } from 'next-seo';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import VideoStyles from '../../../stylesheets/Video.module.css';

const Post = () => (
  <>
    <Head>
      <title>Peña El Paso | El Paso Location</title>
    </Head>

    <NextSeo
      title='Peña El Paso | El Paso Location'
      description='El Paso Texas is located in west Texas on the border with New Mexico and Mexico. This video from our Youtube channel "Living in El Paso Texas" is all about our location and geography.'
      canonical='https://penaelpaso.com/blog/posts/el-paso-location'
    />

    <div className={BlogStyles.blog}>
      <div className={BlogStyles.post}>
        <div className={VideoStyles.container}>
          <div className={VideoStyles.videoResponsive}>
            <iframe title="What El Paso Texas' Geography Has to Offer You" width="560" height="315" src="https://www.youtube.com/embed/NSnTYqDHzIc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div className={BlogStyles.postTitle}>
          <h1>What El Paso Texas' Geography Has to Offer You</h1>
          <span>July 24, 2020</span>
        </div>

        <p>We love El Paso, check out the video to see exactly where El Paso is and what is has to offer geographically!</p>
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

export default Post;
