import Link from "next/link";
import Card from "./Card";
import { MdDateRange } from "react-icons/md";
import moment from "moment";

interface Post {
  post: any;
}


const PostCard = ({ post }: Post) => {
  return (
    <Card>
      <div className="relative overflow-hidden shadow-md mb-6">
        <img src={post.featuredImage.url} className="w-full lg:h-96 object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>
      <h1 className="text-center md:text-start mb-3">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
        </h1>
      <div className="flex flex-row justify-between lg:justify-start lg:gap-x-12 items-center text-center lg:text-start mb-5 w-full">
        <div className="flex justify-center items-center gap-x-2 w-auto">
          <img src={post.author.photo.url} className="w-7 border-[1px] border-solid border-gray-300 rounded-full" />
          <h3 className="text-xs text-gray-600 font-semibold">{ post.author.name }</h3>
        </div>
        <div className="flex justify-center items-center gap-x-2 w-auto">
          <MdDateRange />
          <span className="text-gray-600 text-xs font-medium lg:font-semibold">{moment(post.createdAt).format("DD MMMM YYYY")}</span>
        </div>
      </div>
      <p className="text-gray-600 font-medium text-xs md:text-sm text-justify mt-8">{post.excerpt}</p>
    </Card>
  );
};

export default PostCard;