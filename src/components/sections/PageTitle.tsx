import Link from 'next/link';
import React from 'react';

interface PageTitleProps {
  pageName: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ pageName }) => {
  return (
    <section
      className="page-title"
      style={{ backgroundImage: 'url(assets/images/resource/page-title.jpg)' }}>
      <div className="auto-container">
        <div className="title-outer text-center">
          <h1 className="title">{pageName}</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{pageName}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
