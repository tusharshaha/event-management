import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const SingleBlog = ({ blog }) => {
  return (
    <div className="max-w-xl bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-transform transition-duration-400 hover:scale-105">
      <img
        src={blog?.image}
        alt="Card Image"
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{blog.title}</div>
        <p className="text-gray-700 text-base">
          {blog.description.slice(0, 100)}
        </p>
      </div>
      <div className="px-6 py-4 flex items-center">
        <img
          src={blog.author?.avatar}
          alt="Author Avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="text-gray-900 text-sm font-semibold">
            {blog.author.name}
          </p>
        </div>
      </div>
      <div className="px-6 py-4">
          <Link
            to={`/blog/${blog.id}`}
            className="inline-flex item-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Read More</Link>
      </div>
    </div>
  );
};

export default SingleBlog;
