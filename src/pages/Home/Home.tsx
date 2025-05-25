import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { NavBar, Footer } from '@/components';

import homePicture from '@/assets/home_picture.png';
import './Home.css';

function Home() {
  useEffect(() => {
    document.title = 'Romain ~ Home';
  }, []);

  return (
    <div className='home-container'>
      <NavBar />
      <div className='content-column'>
        <main className='content'>
          <h1 className='greeting'>
            <span>Hi I'm</span> Romain <span className='wave'>👋</span>
          </h1>

          <img src={homePicture} alt='Romain' className='home-pic' />
          <p className='intro'>
            This website is a growing collection of things I've made, things I've learned, or things
            I care about.
          </p>
          <p className='more-info'>
            Learn more about me:
            <Link to='/about'>/about</Link>
          </p>
        </main>

        <h3 className='mobile-warning'>
          Mobile version coming soon. Please check out the website on desktop!
        </h3>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
