import React, { useState } from 'react';
import Blogdata from '../data/BlogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [filteredData, setFilteredData] = useState(Blogdata);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  // Total pages based on filteredData
  const totalPages = Math.ceil(filteredData.length / postsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterBy = (type, value) => {
    setCurrentPage(1); // Reset to first page on filter
    if (type === 'category') {
      setFilteredData(Blogdata.filter(post => post.category === value));
    } else if (type === 'tag') {
      setFilteredData(Blogdata.filter(post => post.tag === value));
    } else if (type === 'recent') {
      setFilteredData(Blogdata.filter(post => post.title === value));
    }
  };

  return (
    <>
      <section className="blog_area">
        <div className="container">
          <div className="row">
            {/* LEFT SIDE */}
            <div className="col-lg-8">
              {currentPosts.map((post) => (
                <div className="blog-left" key={post.id}>
                  <div className="blog-box">
                    <div className="blog-pic position-relative">
                      {/* <img src={post.image} alt={post.title} /> */}
                      <Link className="blogpgimg" to={`/blog/${post.id}`}>
                        <img src={post.image} alt={post.title} />
                      </Link>
                      <span className="blog-date">{post.date}</span>
                    </div>
                    <div className="blog-content">
                      <h4 className="blog-title">{post.title}</h4>
                      <p className="blog-description">{post.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="pagination mt-4 d-flex justify-content-center">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      className={`btn btn-sm mx-1 ${currentPage === index + 1 ? 'btn-dark' : 'btn-outline-dark'}`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-4">
              <div className="blog-right">

                {/* Recent Posts */}
                <div className="recent-post">
                  <h3 className="blog-title">Recent Posts</h3>
                  <hr className="line line-hr-secondary mb-5" />
                  {Blogdata.slice(0, 4).map((post) => (
                    <div className="row mb-3" key={post.id}>
                      <div className="col-4">
                        <div className="blog-pic">
                          <img src={post.image} alt={post.title} />
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="blog-content">
                          <h4 className='m-0'>
                            <button
                              className="btn btn-link p-0 text-start"
                              onClick={() => filterBy('recent', post.title)}
                            >
                              {post.title}
                            </button>
                          </h4>
                          <p className='blog-para line-clamp-2'>{post.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Categories */}
                <div className="blog-categoty-box">
                  <h3 className="blog-title">Category</h3>
                  <hr className="line line-hr-secondary mb-5" />
                  <ul>
                    {[...new Set(Blogdata.map(post => post.category))].map((cat, index) => (
                      <li key={index}>
                        <button className="btn btn-link p-0" onClick={() => filterBy('category', cat)}>
                          <span><i className="fa fa-angle-right" /></span>  {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="blog-tag-area">
                  <h3 className="blog-title">Tags</h3>
                  <hr className="line line-hr-secondary mb-5" />
                  <ul>
                    {[...new Set(Blogdata.map(post => post.tag))].map((tag, index) => (
                      <li key={index}>
                        <button className="btn btn-link p-0" onClick={() => filterBy('tag', tag)}>
                          {tag}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
