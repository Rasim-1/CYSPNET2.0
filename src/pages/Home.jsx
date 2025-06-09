import React from 'react';
import Hero from '../components/Hero/Hero';
import Scroll from '../ui/Scroll/Scroll';
import Dreams from '../components/Dreams/Dreams';
import Opportunity from '../components/Opportunity/Opportunity';
import Info from '../components/Info/Info';
import About from '../components/About/About';
import Advantages from '../components/Advantages/Advantages';
import Cards from '../components/Cards/Cards';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';



const sections = [
  <div data-section key="1"><Hero /></div>,
  <div data-section key="2" ><About/></div>,
  <div data-section key="3" ><Advantages/></div>,
  <div data-section key="5" ><Opportunity/></div>,
  <div data-section key="7" ><Dreams/></div>,
  <div data-section key="6" ><Cards/></div>,  
  <div data-section key="4" ><Info/></div>,
  <div data-section key="8" ><FAQ/></div>,
  <div data-section key="9" ><Footer/></div>,

];

const Home = () => (
  <>
    {sections}
    <Scroll sectionCount={sections.length} />
  </>
);

export default Home;
