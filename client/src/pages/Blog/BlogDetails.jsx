import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = ({ blog }) => {
  const { id } = useParams();
  const blogPost = blog?.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <div className='p-20 text-center text-3xl'>Blog post not found.</div>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogDetails;
