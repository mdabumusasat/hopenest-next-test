import Head from 'next/head';
import React from 'react';

interface PageHeadProps {
  headTitle?: string;
}

const PageHead: React.FC<PageHeadProps> = ({ headTitle }) => {
  return (
    <Head>
      <title>{headTitle ?? 'Hopenest | React Next Js Template'}</title>
      <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/x-icon" />
    </Head>
  );
};

export default PageHead;