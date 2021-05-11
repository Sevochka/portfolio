import { ProjectData } from 'types';
import KTS from 'assets/Diplomas/C3DLabs.jpg';
const projects: ProjectData[] = [
  {
    id: 1,
    title: 'MPU Cloud',
    description: 'Мультифункциональное хранилище электронных моделей изделий.',
    stack: ['React', 'TypeScript', 'ThreeJS', 'MaterialUI', 'Mobx'],
    features: [
      {
        tooltipText: 'Петь песни',
        text: 'Петь песни',
      },
    ],
    links: [{ title: 'Github', link: 'https://github.com' }],
    images: [
      {
        original: KTS,
        thumbnail: KTS,
      },
    ],
  },
  {
    id: 2,
    title: 'Three-IETM',
    description: 'Интерактивное руководство редуктора с анимациями.',
    stack: ['React', 'TypeScript', 'ThreeJS', 'MaterialUI', 'Mobx'],
    features: [
      {
        tooltipText: 'Петь песни',
        text: 'Петь песни',
      },
    ],
    links: [{ title: 'Github', link: 'https://github.com' }],
    images: [
      {
        original: KTS,
        thumbnail: KTS,
      },
    ],
  },
  {
    id: 3,
    title: 'Coronavirus Monitor',
    description: 'Мониторинг заболевших коронавирусом.',
    stack: ['React', 'TypeScript', 'Webpack', 'AntD', 'Highcharts', 'Mobx'],
    features: [
      {
        tooltipText: 'Петь песни',
        text: 'Петь песни',
      },
    ],
    links: [{ title: 'Github', link: 'https://github.com' }],
    images: [
      {
        original: KTS,
        thumbnail: KTS,
      },
    ],
  },
  {
    id: 4,
    title: 'Online Shop',
    description: 'Торговая площадка курсов.',
    stack: ['NodeJS', 'JavaScript', 'Express'],
    features: [
      {
        tooltipText: 'Петь песни',
        text: 'Петь песни',
      },
    ],
    links: [{ title: 'Github', link: 'https://github.com' }],
    images: [
      {
        original: KTS,
        thumbnail: KTS,
      },
    ],
  },
];

export { projects };
