import React from 'react';
import { useLocation } from 'react-router-dom';

const CommonBanner = () => {
  const location = useLocation();
  const path = location.pathname;

  // Hidden for home page
  if (path === '/' || path === '/home') return null;

  // Generate title from path
  const getPageTitle = (pathname) => {
    const cleanPath = pathname.replace('/', '');
    return cleanPath
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());
  };

  const title = getPageTitle(path);

  return (
    <section className="common_banner text-center">
      <h3>{title}</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li>/</li>
        <li><a href="#" className="active">{title}</a></li>
      </ul>
    </section>
  );
};

export default CommonBanner;
