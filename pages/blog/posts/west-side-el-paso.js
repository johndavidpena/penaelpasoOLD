import Head from 'next/head';
import { NextSeo } from 'next-seo';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import VideoStyles from '../../../stylesheets/Video.module.css';

const Post = () => (
  <>
    <Head>
      <title>Peña El Paso | West Side of El Paso</title>
    </Head>

    <NextSeo
      title='Peña El Paso | West Side of El Paso'
      description='The Franklin Mountains split El Paso into the west and east sides. This video from our Youtube channel "Living in El Paso Texas" is all about the sights and sounds of the west side.'
      canonical='https://penaelpaso.com/blog/posts/west-side-el-paso'
    />

    <div className={BlogStyles.blog}>
      <div className={BlogStyles.post}>
        <div className={VideoStyles.container}>
          <div className={VideoStyles.videoResponsive}>
            <iframe title='west-side-el-paso' width="560" height="315" src="https://www.youtube.com/embed/k-rae3tSAVE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div className={BlogStyles.postTitle}>
          <h1>The West Side of El Paso Texas</h1>
          <span>August 28, 2020</span>
        </div>

        <p>Check out the west side of El Paso!</p>
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
