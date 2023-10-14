import React from "react";
import blogBanner from "../../assets/banner/blog-banner.png";
import Blogs from '../../../public/blogs.json';
import SingleBlog from "./SingleBlog";

const Blog = () => {
  return (
    <div>
      <section className="relative">
        <img src={blogBanner} alt="Blog Banner" className="w-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <p className="animate-bounce infinite-bounce text-white text-4xl font-semibold transition-transform transition-duration-300 hover:scale-105">
            Our Blogs
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-20">
          {Blogs.map((blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
