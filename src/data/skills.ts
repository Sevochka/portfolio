import ReactImage from 'assets/react-js-logo.png';
import ThreeImage from 'assets/three-js-logo.png';
import NodeImage from 'assets/node-js-logo.png';
import { SkillData } from 'types';

const skills: SkillData[] = [
  {
    icon: ReactImage,
    cardContentText: 'I love React and use it every single day.',
    link: 'https://reactjs.org/',
  },
  {
    icon: ThreeImage,
    cardContentText: 'I have experience in three.js and its awesome.',
    link: 'https://threejs.org/',
  },
  {
    icon: NodeImage,
    cardContentText: 'Sometimes I use node.js cause I can.',
    link: 'https://nodejs.org/en/',
  },
];

export { skills };
