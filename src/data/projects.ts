import { ProjectData } from 'types';
import KTS from 'assets/Diplomas/C3DLabs.jpg';
const projects: ProjectData[] = [
  {
    id: 1,
    title: 'MPU Cloud',
    description: `Облачное хранилище, призванное помочь 
    инженерам хранить и обмениваться электронными моделями изделий 
    с возможностью их просмотра с любого устройства, имеющего доступ к 
    локальной сети предприятия или сети интернет. `,
    stack: ['React', 'TypeScript', 'ThreeJS', 'MaterialUI', 'Mobx'],
    features: [
      {
        tooltipText: `Для регистрации нового пользователя необходимо ввести фамилию, имя, электронную почту и пароль. 
          Для авторизации существующего пользователя необходимо ввести электронную почту и пароль. 
          Для полей вводы предусмотрена валидация.`,
        text: 'Авторизация пользователя',
      },
      {
        tooltipText: `Загруженный файл хранится на сервере. Если загружаемым файлом является 3Д модель, 
        то файл отправляется на конвертацию в формет glb для отображения во вьювере.`,
        text: 'Загрузка и хранения файлов',
      },
      {
        tooltipText: `Для удаления/редактирования необходимо навести курсор на карточку 
        файла и выбрать нужный пункт из списка.`,
        text: 'Удаление и редактирование загруженных файлов',
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
