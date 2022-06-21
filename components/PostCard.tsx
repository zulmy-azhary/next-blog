import Link from "next/link";
import { Key } from "react";
import { BsDot } from "react-icons/bs";
import Moment from "react-moment";

interface Post {
  post: {
    author: {
      bio: string;
      id: string;
      name: string;
      photo: {
        url: string;
      };
    };
    categories: [
      {
        name: string;
        slug: string;
      }
    ];
    createdAt: string;
    excerpt: string;
    featuredImage: {
      url: string;
    };
    slug: string;
    title: string;
  };
}

const PostCard = ({ post }: Post) => {
  return (
    <section className="mb-6 md:mb-0">
      <div className="relative overflow-hidden mb-6 hover:-translate-y-1 cursor-pointer">
        <Link href={`/post/${post.slug}`}>
          <img src={post.featuredImage.url} className="w-full lg:h-60 object-cover shadow-lg rounded-lg" />
        </Link>
      </div>
      <div className="flex justify-center lg:justify-start items-center gap-x-1 w-auto mb-5">
        {post.categories.map((category: { name: string; slug: string }, idx: Key | null) => (
          <h5 key={idx} className="text-white/60 text-sm font-medium cursor-pointer">
            <Link href={`/category/${category.slug}`}>
              {category.name}
            </Link>
          </h5>
        ))}
        <BsDot className="text-white/60" />
        <Moment className="text-white/60 text-sm font-medium" locale="id" format="DD MMMM YYYY">{post.createdAt}</Moment>
      </div>
      <h1 className="text-center lg:text-start mb-3">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <p className="text-white/60 font-normal text-sm md:text-base text-justify mb-6">{post.excerpt}</p>
      <div className="flex justify-center lg:justify-start items-center gap-x-5 w-auto group cursor-pointer">
        <img src={post.author.photo.url} className="w-10 lg:w-12 rounded-full" />
        <h3 className="text-sm text-white font-medium group-hover:text-white/60">{ post.author.name }</h3>
      </div>
    </section>
  );
};

export default PostCard;