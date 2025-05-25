import { IconType } from 'react-icons';

import './TechCard.css';

type TechCardProps = {
  name: string;
  Icon: IconType;
  category?: string; // optional (lang, lib, tool, etc)
};

const TechCard: React.FC<TechCardProps> = ({ name, Icon, category }: TechCardProps) => {
  return (
    <div className='tech-card'>
      <Icon size={32} style={{ marginBottom: '0.5rem' }} />
      <div className='info'>
        <div className='tech-name'>{name}</div>
        {category && <div className='tech-category'>{category}</div>}
      </div>
    </div>
  );
};

export default TechCard;
