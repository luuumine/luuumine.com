import {
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiR,
  SiPytorch,
  SiTensorflow,
  SiReact,
  SiVite,
  SiGit,
  SiLatex,
} from 'react-icons/si';

import { TechItem } from '@/types';

const techStack: Record<string, TechItem[]> = {
  Languages: [
    { name: 'Python', Icon: SiPython, category: 'Language' },
    { name: 'TypeScript', Icon: SiTypescript, category: 'Language' },
    { name: 'C++', Icon: SiCplusplus, category: 'Language' },
    { name: 'R', Icon: SiR, category: 'Language' },
  ],
  Libraries: [
    { name: 'PyTorch', Icon: SiPytorch, category: 'Library' },
    { name: 'TensorFlow', Icon: SiTensorflow, category: 'Library' },
    { name: 'React', Icon: SiReact, category: 'Library' },
  ],
  Tooling: [
    { name: 'Vite', Icon: SiVite, category: 'Tooling' },
    { name: 'Git', Icon: SiGit, category: 'Version Control' },
    { name: 'LaTeX', Icon: SiLatex, category: 'Tooling' },
  ],
};

export default techStack;
