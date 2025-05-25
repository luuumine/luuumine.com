import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      &copy; {new Date().getFullYear()} Delhommais. All rights reserved.
    </footer>
  );
};

export default Footer;
