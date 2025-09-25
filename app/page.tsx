'use client';

import React from 'react';
import Hero from '@/components/Hero/page'; // Hero component ka correct path
import Services from '@/components/Services/page';
import Event from '@/components/Event/page';

const Home = () => {
  return (
    <>
      {/* Hero Section with background */}
      <Hero />
      <Services />
      <Event />
    </>
  );
};

export default Home;

