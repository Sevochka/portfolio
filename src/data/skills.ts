import ReactImage from 'assets/react-js-logo.png';
import ThreeImage from 'assets/three-js-logo.png';
import NodeImage from 'assets/node-js-logo.png';
import { SkillData } from 'types';

const skills: SkillData[] = [
  {
    icon: ReactImage,
    cardContentText: 'Я люблю React и использую его каждый день.',
    link: 'https://reactjs.org/',
  },
  {
    icon: ThreeImage,
    cardContentText: 'У меня есть опыт в three.js и это замечательно.',
    link: 'https://threejs.org/',
  },
  {
    icon: NodeImage,
    cardContentText: 'Иногда я так же использую Node JS.',
    link: 'https://nodejs.org/en/',
  },
];

export { skills };
