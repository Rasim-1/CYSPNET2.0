import React from 'react';
import Scroll from '../ui/Scroll/Scroll';
import Help from '../components/Help/Help';

const sections = [

  <div data-section key="1" ><Help/></div>,
];

const HelpPage = () => (
  <>
    {sections}
    <Scroll sectionCount={sections.length} />
  </>
);

export default HelpPage;
