import React from 'react';
import BlogList from '@/components/BlogList';
import type { Metadata } from 'next'
 

export const metadata: Metadata = {
  title: '博客列表',
}
const Home: React.FC = () => (
  <BlogList/>
);

export default Home;