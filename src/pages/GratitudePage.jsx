import React from 'react';
import Scroll from '../ui/Scroll/Scroll';
import Gratitude from '../components/Gratitude/Gratitude';


const sections = [

  <div data-section key="1" ><Gratitude/></div>,
];

const GratitudePage = () => (
  <>
    {sections}
    <Scroll sectionCount={sections.length} />
  </>
);

export default GratitudePage;
