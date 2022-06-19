import type { NextPage } from 'next'
import Head from 'next/head'
import { Key } from 'react';

import { PostCard, PostWidget, Categories } from "../components/index";
import { getPosts } from "../services";

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <div className="container mx-auto px-5 md:px-10 mb-8 mt-16">
        <Head>
          <title>My Blog | Zulmy Azhary AS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post: {node: any}, idx: Key | null | undefined) => <PostCard key={idx} post={post.node} />)}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getPosts() || [];
  
  return {
    props: { posts }
  }
}

export default Home
