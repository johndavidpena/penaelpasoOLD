import Head from 'next/head';
import { NextSeo } from 'next-seo';
import BlogStyles from '../../../stylesheets/Blog.module.css';

const Post001 = () => (
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
      <div className={BlogStyles.post}>
        <img src='https://media-exp1.licdn.com/dms/image/C5612AQHry1gmrrHVSg/article-cover_image-shrink_720_1280/0?e=1599696000&v=beta&t=UcMdn_bCT-VJu_4W4UIgxNxXz39vr35ko3MavE-3oD0' alt='exterior sidewalk of a beautiful home in the desert' />

        <div className={BlogStyles.postTitle}>
          <h1>Is Working From Home Changing Where We Can Live?</h1>
          <span>June 12, 2020</span>
        </div>

        <p>Imagine that you are living in or around Silicon Valley in order to go to work. This area is extremely expensive to live in due to the lack of new housing and the wealth created by the tech boom. But what if you could keep your same job and work from home? Now you could move to a less expensive area and find your dream home.</p>
        <br />
        <p>In just 3 months, a lot has changed, including how some people feel about where and how they live. One of the biggest changes is the new work-from-home policy that started as a way to keep employees safe and has become the most popular work trend across the country. Many companies like Twitter and Barclays are moving to partially or completely remote. A recent survey by the research firm Gartner reported that 74% of participants plan to increase the number of permanent remote employees.</p>
        <br />
        <p>It’s easy to see how this work-from-home scenario benefits corporations as it saves them huge sums of money in commercial leases, but what about employees? Most employees are thrilled to have more flexibility, less commute time, and more time for leisure and family. A recent Hanley Wood survey showed that 55% of respondents were willing to relocate to another city if they were currently living in an expensive market and could work remotely.</p>
        <br />
        <img src='https://media-exp1.licdn.com/dms/image/C5612AQFeF5HtzPygIg/article-inline_image-shrink_1000_1488/0?e=1599696000&v=beta&t=KXoF_Z0cWjDXeS_SD3iP4VG3DG8BADu5ObA1YOtEkcg' alt='a graph supporting the statement above' />
        <br />
        <p>So, would you consider moving away from a large urban area in exchange for that big house on the hill or a larger home away from it all?</p>
        <br />
        <br />
      </div>
    </div>
  </>
);

export default Post001;
