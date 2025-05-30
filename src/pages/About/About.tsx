import { useEffect } from 'react';

import { NavBar, Footer, TechCard } from '@/components';
import { techStack } from '@/data/';

import './About.css';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'Romain ~ About';
  }, []);

  const techCards = Object.entries(techStack).map(([groupName, items]) => (
    <div key={groupName} className='techstack-group'>
      <h3 className='techstack-group-title'>{groupName}</h3>
      <div className='tech-cards'>
        {items.map(({ name, Icon, category }) => (
          <TechCard key={name} name={name} Icon={Icon} category={category} />
        ))}
      </div>
    </div>
  ));

  return (
    <div className='about-container'>
      <NavBar />
      <div className='content-column'>
        <main className='content'>
          <h1>About Me</h1>
          <p>
            Data Science Student @ ENSAE & Polytechnique. Currently learning React and building this
            website.
          </p>
          <div className='techstack'>
            <div className='tech-cards'>{techCards}</div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
