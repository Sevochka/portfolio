import { AchievementData } from 'types';
import Umnik from 'assets/Умник.jpg';
import UmnikWinner from 'assets/diplomas/UmnikWinner.jpg';
import ForgeResearch from 'assets/ForgeResearch.jpg';
import KTS from 'assets/diplomas/КТС.jpg';
import C3DLabs from 'assets/diplomas/C3DLabs.jpg';
import Forge from 'assets/diplomas/Forge.jpg';
import Smithy from 'assets/diplomas/Кузница.jpg';
import CISCO from 'assets/diplomas/СИСКО.jpg';

const achievements: AchievementData[] = [
  {
    thumbnailImage: Umnik,
    images: [{ original: UmnikWinner, thumbnail: UmnikWinner }],
    title: 'Программа «УМНИК»',
    description: `Программа «УМНИК» направленная на поддержку коммерчески ориентированных научно-технических проектов 
    молодых исследователей. За победу в программе нами был получен Грант в размере 500 тысяч рублей.
    Выступающий – Адрей Архипов. Был так же заключен договор [Договор No343ГУЦЭС8-D3/56368 от 27.12.2019].`,
    projectId: 1,
    date: new Date(2019, 11, 27),
    links: [
      {
        title: 'Список победителей УМНИК 2019',
        link:
          'https://fasie.ru/press/fund/rezultaty-po-programme-umnik-v-ramkakh-natsprogrammy-tsifrovaya-ekonomika-rf/',
      },
      {
        title: 'Новость на сайте Московского Политеха',
        link:
          'https://mospolytech.ru/news/andrey-arkhipov-nasha-obshchaya-komandnaya-tsel-obespechit-studentov-dostoynym-portfolio/?sphrase_id=38973',
      },
      {
        title: 'Публичный реестр поддержанных договоров',
        link: 'https://online.fasie.ru/m/public-contracts/registry ',
      },
    ],
  },
  {
    thumbnailImage: ForgeResearch,
    title: 'Forge Research',
    description: `Грант Forge Research от Autodesk в размере 3000$ на развитие группового проекта по созданию 
      интерактивных электронных технических руководств (ИЭТР) к изделию`,
    links: [
      {
        title: 'Новость на сайте Московского Политеха',
        link:
          'https://new.mospolytech.ru/news/students-of-the-moscow-polytechnic-university-has-won-an-international-grant-forge-research/',
      },
      {
        title: 'Новость на форуме Autodesk',
        link:
          'https://forums.autodesk.com/t5/forge-api-i-programmirovanie/forge-research-grant-v-2020-vruchen-moskovskomu-politehnicheskomu/td-p/9636200',
      },
    ],
    date: new Date(2020, 6, 15),
  },
  {
    images: [{ original: KTS, thumbnail: KTS }],
    title: 'KTS Frontend-developer',
    description: `Летняя школа от студии KTS. Для поступления необходимо было пройти небольшой тест на знание JS, 
    HTML и CSS. По результатам тестирования были выбраны 15 человек и объеденены в группы по 2 человека. Основное 
    направление обучение – React + Mobx. Для дипломной работы было предложено разработать мониторинг заболевших 
    коронавирусов с использованием внешнего API сервиса.`,
    projectId: 3,
    links: [
      {
        title: 'KTS Studio',
        link: 'https://kts.studio/',
      },
    ],
    date: new Date(2020, 8, 18),
  },
  {
    images: [{ original: C3DLabs, thumbnail: C3DLabs }],
    title: 'C3D Labs Developton',
    description: `На факультете информационных технологий при поддержке партнера факультета, компании C3D Labs, 
    прошел первый открытый «developton»: разновидность хакатона, в котором задание связано с разработкой 
    программного обеспечения. К мероприятию присоединились члены сборной WorldSkills в компетенции 
    «Инженерный дизайн CAD» и студенты образовательной программы «Интеграция и программирование в САПР».`,
    projectId: 1,
    links: [
      {
        title: 'Новость на сайте Московского Политеха',
        link: 'https://old.mospolytech.ru/news_new.php?id=11265',
      },
    ],
    date: new Date(2020, 8, 18),
  },
  {
    images: [{ original: Forge, thumbnail: Forge }],
    title: 'Autodesk 3D Hackathon',
    description: '',
    date: new Date(2018, 3, 8),
  },
  {
    images: [{ original: Smithy, thumbnail: Smithy }],
    title: 'MPU 3D Hackathon',
    description: '',
    date: new Date(2019, 11, 3),
  },
  {
    images: [{ original: CISCO, thumbnail: CISCO }],
    title: 'CISCO IT Essentials',
    description: '',
    date: new Date(2018, 11, 3),
  },
];

export { achievements };
