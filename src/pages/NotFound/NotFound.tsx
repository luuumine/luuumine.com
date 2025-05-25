import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { NavBar, Footer } from '@/components';

import './NotFound.css';

function NotFound() {
  useEffect(() => {
    document.title = 'Romain ~ Not Found';
  }, []);

  return (
    <div className='not-found-container'>
      <NavBar />
      <main className='content-column'>
        <main className='content'>
          <h1>Not Found</h1>
          <p>Looks like this page doesn't exist.</p>
          <Link to='/' className='home-button'>
            Go back home
          </Link>
        </main>
        <Footer />
      </main>
    </div>
  );
}

export default NotFound;
