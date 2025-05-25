import { GrMail, GrGithub, GrLinkedin, GrDocumentPdf, GrFormLocation } from 'react-icons/gr';
import { useEffect } from 'react';

import { NavBar, Footer } from '@/components';

import './Contact.css';

function Contact() {
  useEffect(() => {
    document.title = 'Romain ~ Contact';
  }, []);

  return (
    <div className='contact-container'>
      <NavBar />
      <div className='content-column'>
        <main className='content'>
          <h1>Contact</h1>
          <p>Got a question, an idea, or just feel like saying hi? Feel free to reach out.</p>
          <ul className='contact-links'>
            <li>
              <GrMail size={20} />{' '}
              <a href='mailto:romain.delhommais@gmail.com'>romain.delhommais@gmail.com</a>
            </li>
            <li>
              <GrLinkedin size={20} />{' '}
              <a href='https://linkedin.com/in/romain-delhommais' target='_blank'>
                Romain Delhommais
              </a>
            </li>
            <li>
              <GrGithub size={20} />{' '}
              <a href='https://github.com/Luuumine' target='_blank'>
                @Luuumine
              </a>
            </li>
            <li>
              <GrDocumentPdf size={20} />{' '}
              <a href='/cv.pdf' target='_blank'>
                Download CV
              </a>
            </li>
          </ul>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
