import type { NextPage } from 'next'
import { GetStaticProps } from 'next';
import Head from 'next/head'
import { Key } from 'react';

import { PostCard, PostWidget, Categories } from "../components/index";
import { getPosts } from "../services";

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <div className="container mx-auto px-8 md:px-10 mb-8 mt-16">
        <Head>
          <title>My Blog | Zulmy Azhary AS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {posts.map((post: { node: any }, idx: Key | null | undefined) => (
            <main key={idx} className="col-span-1 md:col-span-6 lg:col-span-4 border-b-2 border-white/10 md:border-b-0">
              <PostCard post={post.node} />
            </main>
          ))}

          {/* <aside className="lg:col-span-4 col-span-1">
            <PostWidget />
            <Categories />
          </aside> */}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts() || [];
  
  return {
    props: { posts }
  }
}

export default Home