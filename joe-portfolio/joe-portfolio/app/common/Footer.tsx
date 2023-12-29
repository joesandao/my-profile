import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white p-4 text-center">
      <p>© {new Date().getFullYear()} Joe Kuroha</p>
    </footer>
  );
};

export default Footer;