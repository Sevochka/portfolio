import { ProjectData } from 'types';
import {
  GroupPage,
  FilesCardView,
  ViewerCatalog,
  ViewerMain,
} from 'assets/projects/mpu-cloud';

import {
  AnimationDisView,
  ExplodeView,
  HideView,
  MainView,
} from 'assets/projects/three-ietm';
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
      {
        tooltipText: `Для быстрой навигации по файлам предусмотрено 3 вида фильтрации: 
        поиск по всем полям файла, поиск по каждому полю отдельно и сортировка от 
        большего к меньшему у каждого поля.`,
        text: 'Поиск и фильтрация по загруженным файлам',
      },
      {
        tooltipText: `Для удобства работы и взаимодействия предусмотрен отдельный viewer для 3D-моделей, 
        изображений и .pdf файлов.`,
        text: 'Просмотр 3D-моделей, .png и .jpg изображений, .pdf файлов.',
      },
      {
        tooltipText: `Viewer 3D-моделей предоставляется возможность автоматического вращения с 
        установкой желаемой скорости, разнесение модели и разрез с возможностью выбора плоскостей и направления.`,
        text: 'Вращение, разнесение, разрез 3D моделей.',
      },
      {
        tooltipText: `Viewer 3D-моделей предоставляется возможность привязать аннотацию с желаемым текстом 
        к любой координате. При вращении модели аннотация так же вращается.`,
        text: 'Добавление аннотаций на 3D модели.',
      },
      {
        tooltipText: `Конвертер позволяет конвертировать 3D-модель в более, чем 30 различных форматов.`,
        text: 'Конвертация моделей путем взаимодействия с сервером.',
      },
      {
        tooltipText: `Для организации работы в несколько человек предусмотрено создание групп и назначение 
        прав доступа.`,
        text:
          'Создание и участие в группах для совместной работа пользователей.',
      },
      {
        tooltipText: `Администратор группы может удалять/добавлять и изменять права доступа участников группы.`,
        text: 'Редактирование, добавление и удаления участников в группах.',
      },
    ],
    links: [
      { title: 'Сайт [mpu-cloud.ru]', link: 'http://mpu-cloud.ru/' },
      {
        title: 'Демонстрация работы [Youtube]',
        link: 'https://youtu.be/o3g3lGKI818',
      },
      {
        title: 'Документация для ВКР [GDrive]',
        link:
          'https://drive.google.com/drive/folders/11GUf7h33s0qCgsVG5AB_8NOOEFsHzkpP?usp=sharing',
      },
    ],
    images: [
      {
        original: GroupPage,
        thumbnail: GroupPage,
      },
      {
        original: FilesCardView,
        thumbnail: FilesCardView,
      },
      {
        original: ViewerCatalog,
        thumbnail: ViewerCatalog,
      },
      {
        original: ViewerMain,
        thumbnail: ViewerMain,
      },
    ],
  },
  {
    id: 2,
    title: 'Three-IETM',
    description: `Интерактивное электронное техническое руководство (ИЭТР) для двухступенчатого редуктора.`,
    stack: ['React', 'TypeScript', 'ThreeJS', 'AntDesign', 'Mobx'],
    features: [
      {
        tooltipText: `Переключить информацию справочного материала можно через меню в левой части экрана или 
        при выделении конкретной детали в окне вьювера. Справочная информация отобразится в правой части экрана.`,
        text: `Просмотр справочного материала по эксплуатации, ремонту и по отдельной детали.`,
      },
      {
        tooltipText: `Взаимодействие с моделью включают в себя такие инструменты, как скрытия, отображение и 
        выделение деталей, автоматическое вращение, изоляция, вписывание в вид, разнесение.`,
        text: `Просмотр и взаимодействие с 3D-моделью.`,
      },
      {
        tooltipText: `Анимации были разработаны с помощью Blender, хранятся в формате GLB.`,
        text: `Запуск интерактивные анимации, демонстрирующие использование изделия, ремонт и др.`,
      },
    ],
    links: [{ title: 'Github', link: 'https://github.com' }],
    images: [
      {
        original: AnimationDisView,
        thumbnail: AnimationDisView,
      },
      {
        original: ExplodeView,
        thumbnail: ExplodeView,
      },
      {
        original: HideView,
        thumbnail: HideView,
      },
      {
        original: MainView,
        thumbnail: MainView,
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
        original: ViewerMain,
        thumbnail: ViewerMain,
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
        original: ViewerMain,
        thumbnail: ViewerMain,
      },
    ],
  },
];

export { projects };
