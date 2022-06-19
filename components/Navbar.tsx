import { useContext } from "react";
import Link from "next/link";

const categories = [
  { name: "Web Design", slug: "webdesign" },
  { name: "Web Development", slug: "webdev" },
]

const Navbar = () => {
  return (
    <nav className="container mx-auto px-5 md:px-10 mb-8">
      <div className="border-b w-full flex justify-between items-center border-sky-700 py-8">
          <Link href="/">
            <span className="cursor-pointer font-bold text-2xl lg:text-4xl">
              My Blog
            </span>
          </Link>
        <div className="hidden md:flex flex-row justify-between items-center gap-x-5">
          {categories.map((category, idx) => (
            <Link key={idx} href={`/category/${category.slug}`}>{category.name}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;