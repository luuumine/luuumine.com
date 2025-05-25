import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import { NavBar, Footer, TechCard } from '@/components';
import { techStack } from '@/data/';

import './About.css';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'Romain ~ About';
  }, []);

  const renderTechStack = () => {
    return Object.entries(techStack).map(([groupName, items]) => (
      <div key={groupName} className='techstack-group'>
        <h3 className='techstack-group-title'>{groupName}</h3>
        <div className='tech-cards'>
          {items.map(({ name, Icon, category }) => (
            <TechCard key={name} name={name} Icon={Icon} category={category} />
          ))}
        </div>
      </div>
    ));
  };

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
            I'm Romain, a French Data Science student at ENSAE & École Polytechnique. I enjoy
            coding, investing, and building projects like this website.
          </p>

          <div className='techstack'>
            <h2>My tech stack</h2>
            <div className='tech-cards'>{techCards}</div>
          </div>

          <p className='more-info'>
            More info: <Link to='/contact'>/contact</Link> &<Link to='/projects'>/projects</Link>
          </p>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
