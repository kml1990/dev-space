import React from 'react';
import NextHead from 'next/head';

export interface HeadProps {
  title: string;
}

const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <NextHead>
      <title>Dev Space | {title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
  );
};

export default Head;
