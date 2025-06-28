import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/BlogData';

const SingleBlog = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id.toString() === id);

  if (!blog) return <h4 className="text-center">Blog not found.</h4>;

  return (
    <section className="blog_area">
      <div className="container blog-left">
        <div className="blog-box">
          <div className="blog-pic position-relative mb-3">
            <img src={blog.image} alt={blog.title} />
            {/* <span className="blog-date">{blog.date}</span> */}
          </div>
          <div className="blog-content">
            <h4 className="blog-category">{blog.category}</h4>
            <h2 className="blog-title mb-2">{blog.title}</h2>
            <p className="blog-description">{blog.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
