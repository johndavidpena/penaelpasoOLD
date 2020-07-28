import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Link from '../../components/Link';
import BlogStyles from '../../stylesheets/Blog.module.css';

const Blog = () => (
  <>
    <Head>
      <title>Peña El Paso - Blog</title>
    </Head>

    <NextSeo
      title='Peña El Paso - Blog'
      description='Peña El Paso serves buyers, sellers, and investors in the greater El Paso area.'
      canonical='https://penaelpaso.com/blog'
    />

    <div className={BlogStyles.blog}>
      <h1>Welcome to the blog!</h1>

      <Link href='/blog/posts/006'>
        <div className={BlogStyles.card}>
          <span>July 28, 2020</span>
          <p>Millennials and homeownership in America.</p>
          <span>#millenials #homeownership #generations</span>

          <img src='https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80' alt='millennials making heart shapes with their hands' />

          <h2>Are Millennials Interested in Homeownership? - Pt. 2</h2>
          <p>In part 1 on this topic, we explored the idea of millennials and their relationship with homeownership. And while this...</p>
        </div>
      </Link>

      <Link href='/blog/posts/005'>
        <div className={BlogStyles.card}>
          <span>July 24, 2020</span>
          <p>What El Paso Texas' Geography Has to Offer You</p>
          <span>#elpasotexas #movetoelpaso #livinginelpasotexas</span>

          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1595632845/Living%20In%20El%20Paso%20Texas/VIDEOCOVER_whereiselpasotexas.jpg' alt='thumbnail for the video' />

          <h2>Curious about El Paso Texas?</h2>
          <p>Here's a video from our YouTube channel, 'Living In El Paso Texas' that's all about where El Paso is geographically.</p>
        </div>
      </Link>

      <Link href='/blog/posts/004'>
        <div className={BlogStyles.card}>
          <span>July 20, 2020</span>
          <p>Top 5 Reasons Why We Moved to El Paso Texas</p>
          <span>#elpasotexas #movetoelpaso #livinginelpasotexas</span>

          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1595341643/TITLEayden_Top5Reasons.jpg' alt='top 5 reasons why we moved to el paso texas thumbnail' />

          <h2>We moved to El Paso Texas and love it!</h2>
          <p>Here's a video from our YouTube channel, 'Living In El Paso Texas' that's all about why we moved here.</p>
        </div>
      </Link>

      <Link href='/blog/posts/003'>
        <div className={BlogStyles.card}>
          <span>July 8, 2020</span>
          <p>Millennials and homeownership in America.</p>
          <span>#millenials #homeownership #generations</span>

          <img src='https://images.unsplash.com/photo-1508166785545-c2dd4c113c66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' alt='millennials taking selfies' />

          <h2>Are Millennials Interested in Homeownership? - Pt. 1</h2>
          <p>Millennials make up the generation of adults between the ages of 22 and 39 or those born between 1981 - 1996 roughly...</p>
        </div>
      </Link>

      <Link href='/blog/posts/002'>
        <div className={BlogStyles.card}>
          <span>June 30, 2020</span>
          <p>Has sheltering in place changed the way that you use your home?</p>
          <span>#shelteringinplace #homedesign #diyhome</span>

          <img src='https://media-exp1.licdn.com/dms/image/C5612AQGRIfhPo74Z6w/article-cover_image-shrink_720_1280/0?e=1599696000&v=beta&t=XlepB8dDTJBQf7OZomCsFWWE0gbyWQVJnUKYGj1M5Nk' alt='a woman sitting at a home desk' />

          <h2>Has Sheltering In Place Changed What We Want In Our Homes?</h2>

          <p>The term ‘sheltering in place’ has taken on a whole new meaning as of late and it has also changed the home...</p>
        </div>
      </Link>

      <Link href='/blog/posts/001'>
        <div className={BlogStyles.card}>
          <span>June 12, 2020</span>
          <p>Working from home and how it might influence where people choose to live.</p> <span>#workingfromhome #relocate #makeamove</span>

          <img src='https://media-exp1.licdn.com/dms/image/C5612AQHry1gmrrHVSg/article-cover_image-shrink_720_1280/0?e=1599696000&v=beta&t=UcMdn_bCT-VJu_4W4UIgxNxXz39vr35ko3MavE-3oD0' alt='exterior sidewalk of a beautiful home in the desert' />

          <h2>Is Working From Home Changing Where We Can Live?</h2>
          <p>Imagine that you are living in or around Silicon Valley in order to go to work. This area is extremely expensive...</p>
        </div>
      </Link>
    </div>
  </>
);

export default Blog;
