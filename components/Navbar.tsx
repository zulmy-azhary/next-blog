import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

const categories = [
  { name: "Web Design", slug: "webdesign" },
  { name: "Web Development", slug: "webdev" },
]

const Navbar = () => {
  return (
    <nav className="container mx-auto px-5 md:px-10 mb-8">
      <div className="w-full flex justify-between items-center py-8 gap-x-24">
        <Link href="/">
          <span className="cursor-pointer font-bold text-2xl lg:text-4xl">
            My Blog
          </span>
        </Link>
        <div className="hidden md:flex justify-between items-center grow">
          <div className="flex flex-row justify-between items-center gap-x-5">
            {categories.map((category, idx) => (
              <Link key={idx} href={`/category/${category.slug}`}>{category.name}</Link>
            ))}
          </div>
          <div className="relative w-auto">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <AiOutlineSearch className="text-gray-400" />
            </div>
            <input type="text" className="text-gray-400 placeholder-gray-400 text-sm rounded-full block w-full pl-10 p-2 bg-[#1F2937] bg-opacity-50 outline-0" placeholder="Search..." required />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;