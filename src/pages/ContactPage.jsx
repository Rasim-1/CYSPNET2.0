import React from 'react';
import Scroll from '../ui/Scroll/Scroll';
import Contacts from '../components/Contacts/Contacts';

const sections = [

  <div data-section key="1" ><Contacts/></div>,
];

const ContactPage = () => (
  <>
    {sections}
    <Scroll sectionCount={sections.length} />
  </>
);

export default ContactPage;
