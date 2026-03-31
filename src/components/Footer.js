import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <p>&copy; {year} Joshua Agyekum | Learning & Development | Oslo, Norway</p>
    </footer>
  );
}

export default Footer;
