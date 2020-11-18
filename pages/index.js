import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>僕はゆめみおです。好きな食べ物は担々麺です。</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          Read <Link href="/posts/first-post">first page!</Link>
        </p>
        <p>
          Read <Link href="/posts/second-post">second page!</Link>
        </p>
      </section>
    </Layout>
  )
}
