import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AlertMessage from '../components/layout/AlertMessage';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import AnimalGallery from '../components/animals/AnimalGallery';
import NewsletterSection from '../components/home/NewsletterSection';
import SearchResults from '../components/animals/SearchResults';
import { useAnimals } from '../context/AnimalsContext';

const HomePage = () => {
  const { searchResults } = useAnimals();

  return (
    <>
      <AlertMessage />
      <Hero />
      <AboutSection />
      {searchResults && <SearchResults />}
      <AnimalGallery />
      <NewsletterSection />
    </>
  );
};

export default HomePage;
