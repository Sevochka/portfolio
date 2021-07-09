import { ProjectData } from 'types';
import {
  FilesCardView,
  GroupPage,
  ViewerMain,
  ViewerCatalog,
  AddUser,
  FilesListView,
  ImageViewer,
  PdfViewer,
  GroupUsers,
  MainCloudPage,
} from 'assets/projects/mpu-cloud';

import {
  AnimationDisView,
  ExplodeView,
  HideView,
  MainView,
} from 'assets/projects/three-ietm';

import {
  CountryPage,
  CountryPageRadial,
  CountryPageTimeline,
  CountryStat,
  MainPage,
  MainPageDiagram,
  MainPageMap,
  InfoPage,
} from 'assets/projects/coronavirus-monitor';

import {
  AddCoursePage,
  CartPage,
  EditCourse,
  CoursesPage,
  ProfilePage,
  OrdersPage,
  SignInPage,
  SignUpPage,
} from 'assets/projects/corona-courses';

import {
  AddEmployee,
  AddEmployee2,
  AddEmployee4,
  AddEmployee3,
  EmployeesPage,
  MainPage as StaffMainPage,
  ArchivePage,
  DocumentPage,
  OptionsPage,
  ReportDocument,
  OrganizationPage,
  SuccessAuthorization,
} from 'assets/projects/staff-app';

import {
  Bet,
  MainRoulette,
  Settings,
  Spinning,
  Theme,
} from 'assets/projects/roulette';

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
      {
        title: 'Достижения работы [GDrive]',
        link:
          'https://drive.google.com/drive/folders/1hNGDTu1cXmW51leqihV7EUq0PGQOtVeQ?usp=sharing',
      },
    ],
    images: [
      {
        original: MainCloudPage,
        thumbnail: MainCloudPage,
      },
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
      {
        original: AddUser,
        thumbnail: AddUser,
      },
      {
        original: FilesListView,
        thumbnail: FilesListView,
      },
      {
        original: ImageViewer,
        thumbnail: ImageViewer,
      },
      {
        original: PdfViewer,
        thumbnail: PdfViewer,
      },
      {
        original: GroupUsers,
        thumbnail: GroupUsers,
      },
    ],
  },
  {
    id: 2,
    title: 'Three-IETM',
    description: `Интерактивное электронное техническое руководство (ИЭТР) для двухступенчатого редуктора. 
    Создано соместно со Михаилом в рамках помощи для его ВКР. В мои обязанности входила разработка всего
    клиенсткого приложения, в его – моделирования моделей и анимаций в Blender.`,
    stack: ['React', 'TypeScript', 'ThreeJS', 'AntDesign', 'Mobx'],
    features: [
      {
        tooltipText: `Переключить информацию справочного материала можно через меню в левой части экрана. 
        Справочная информация отобразится в правой части экрана.`,
        text: `Просмотр справочного материала по эксплуатации и ремонту.`,
      },
      {
        tooltipText: `При выделении конкретной детали в окне вьювера справочная информация отобразится 
        в правой части экрана.`,
        text: `Просмотр справочного материала по отдельной детали.`,
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
    links: [
      { title: 'Исходный код [Github]', link: 'https://github.com' },
      { title: 'Демонстрация работы [Youtube]', link: 'https://github.com' },
      { title: 'Документация для ВКР [GDrive]', link: 'https://github.com' },
    ],
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
    description: `Мониторинг заболевших коронавирусом, работающий с использованием Covid19 API. 
      Проект был придуман и создан в рамках обучения по программе KTS Studio, в дальнейшем так же был 
      выбран для составления проектной документации в рамках дисциплины "Проектное управление в ИТ".`,
    stack: ['React', 'TypeScript', 'Webpack', 'AntD', 'Highcharts', 'Mobx'],
    features: [
      {
        tooltipText: `Общая статистика включает в себя такие данные, как общее количество заболевших, 
        выздоровевших и умерших, а так же новые заболевшие, выздоровшие и умершие сегодня`,
        text: 'Просмотр общей статистики на главной странице приложения.',
      },
      {
        tooltipText: `При выделении какого-либо элемента статистики из общей статистики, мы изменим параметр 
        отображения рейтинга.`,
        text: 'Просмотр рейтинга стран по параметрам.',
      },
      {
        tooltipText: `При выделении страны пользовватель получит данные о ней.`,
        text: 'Взаимодействие с интерактивной общемировой картой.',
      },
      {
        tooltipText: `Таблица разбита на страницы для удобной навигации и работы с данными. Так же, 
        каждый столбец поддерживает сортировку значений.`,
        text: 'Интерактивная таблица стран.',
      },
      {
        tooltipText: `При выборе страны в таблице открывается страница страны.`,
        text:
          'Страница страны с основной информацией, таймлайном и диаграммой соотношения.',
      },
      {
        tooltipText: `Вся информация взята из открытый медицинский источников.`,
        text: 'Просмотр рекомендаций и методом борьбы с COVID-19.',
      },
    ],
    links: [
      { title: 'Исходный код [Github]', link: 'https://github.com' },
      {
        title: 'Проектная документация [GDrive]',
        link:
          'https://drive.google.com/drive/folders/16hJvZTdxhDT47Y6cZelfbsNsVI__tlP0?usp=sharing',
      },
      {
        title: 'COVID 19 API [GetPostman]',
        link: 'https://documenter.getpostman.com/view/10808728/SzS8rjbc',
      },
    ],
    images: [
      {
        original: MainPage,
        thumbnail: MainPage,
      },
      {
        original: MainPageDiagram,
        thumbnail: MainPageDiagram,
      },
      {
        original: MainPageMap,
        thumbnail: MainPageMap,
      },
      {
        original: CountryStat,
        thumbnail: CountryStat,
      },
      {
        original: CountryPage,
        thumbnail: CountryPage,
      },
      {
        original: CountryPageRadial,
        thumbnail: CountryPageRadial,
      },
      {
        original: CountryPageTimeline,
        thumbnail: CountryPageTimeline,
      },
      {
        original: InfoPage,
        thumbnail: InfoPage,
      },
    ],
  },
  {
    id: 4,
    title: 'Online Shop',
    description: `Торговая площадка курсов, предназначеная для пользователей, 
    желающих усовершенствовать свои знания в IT сфере путем покупки курсов,
    а также для разработчиков курсов, предоставляя им торговую площадку для продажи. 
    Чтобы воспользоваться приложением пользователь должен иметь выход в интернет.`,
    stack: ['NodeJS', 'JavaScript', 'Express', 'MongoDB'],
    features: [
      {
        tooltipText: `Пользователь регистрируется при оформлении или создании нового заказа.`,
        text: `Регистрация пользователей.`,
      },
      {
        tooltipText: `Витрина интернет-магазина располагается на Интернет-сервере и выступает в качестве веб-сайта 
        с динамическим содержанием. Основа витрины интернет-магазина - это каталог с товарами с указанием цен.`,
        text: `Предоставление доступа к базе продаваемых товаров (в виде каталога, прайс-листа).`,
      },
      {
        tooltipText: `Выбрав товар, пользователь помещает его в «корзину». «Корзина» представляет собой электронное 
        представление реальной корзины, то есть список продуктов, который оплачивается одновременно.`,
        text: `Взаимодействие с электронной «тележкой» покупателя.`,
      },
      {
        tooltipText: `Любой зарегистрированный пользователь может создать и выложить в список товаров свой собственный 
        курс. При создании курса запрашивается краткая информация о курсе: название, цена и аватар курса.`,
        text: `Возможность выставление собственных курсов.`,
      },
      {
        tooltipText: `Пользователь, выложивший один или более курсов, имеет возможность отредактировать их. 
        Для этого на главное страницы курса предусмотрены дополнительные элементы управления на последних.`,
        text: `Редактирование собственных курсов.`,
      },
      {
        tooltipText: `Редактирование должно предусматривать методы защита. 
        Пользователь не может редактировать чужие курсы.`,
        text: `Защита курсов от несанкционированного редактирования.`,
      },
    ],
    links: [
      {
        title: 'Исходный код [Github]',
        link: 'https://github.com/Sevochka/online-shop-node-js',
      },
      {
        title: 'Демонстрация работы [Youtube]',
        link: 'https://www.youtube.com/watch?v=z4JLwmDIwEU',
      },
    ],
    images: [
      {
        original: AddCoursePage,
        thumbnail: AddCoursePage,
      },
      {
        original: CartPage,
        thumbnail: CartPage,
      },
      {
        original: CoursesPage,
        thumbnail: CoursesPage,
      },
      {
        original: EditCourse,
        thumbnail: EditCourse,
      },
      {
        original: ProfilePage,
        thumbnail: ProfilePage,
      },
      {
        original: OrdersPage,
        thumbnail: OrdersPage,
      },
      {
        original: SignInPage,
        thumbnail: SignInPage,
      },
      {
        original: SignUpPage,
        thumbnail: SignUpPage,
      },
    ],
  },
  {
    id: 5,
    title: 'Roulette',
    description: `Приложение для игры в рулетку было создано в рамках дисциплины «Мобильная разработка».
    По ссылке с исходным кодом приложения так же можно найти лабораторные работы и другие проекты.`,
    stack: ['RadStudio', 'C++ Builder'],
    features: [
      {
        tooltipText: `Начальный баланс для игры 500 фишек. Пользователь может выбрать из предложенного количества 
        ставки или ввести свое число.`,
        text: `Вращения рулетки со ставками.`,
      },
      {
        tooltipText: `Предусмотрена возможность переключать темную и светлую тему.`,
        text: `Смена темы отображения.`,
      },
      {
        tooltipText: `С помощью ползунков можно настроить как вероятноть выпадения красного и черного, так 
        и черного&красного и zero.`,
        text: `Настройка вероятности выпадения.`,
      },
    ],
    links: [
      {
        title: 'Исходный код [Github]',
        link: 'https://github.com/Sevochka/radStudio/tree/master/Roulette',
      },
    ],
    images: [
      {
        original: Bet,
        thumbnail: Bet,
      },
      {
        original: MainRoulette,
        thumbnail: MainRoulette,
      },
      {
        original: Settings,
        thumbnail: Settings,
      },
      {
        original: Spinning,
        thumbnail: Spinning,
      },
      {
        original: Theme,
        thumbnail: Theme,
      },
    ],
  },
  {
    id: 6,
    title: 'ИС-Кадры',
    description: `Информационная система «ИС-Кадры» предназначена для 
    возможности ведение и взаимодействие с единой базой данных сотрудников предприятия. 
    Продукт позволяет создавать, редактировать, удалять и просматривать карточки сотрудников, 
    должностей и отделов, а также генерировать и сохранять такие документы, 
    как согласие на обработку персональных данных, анкета нового сотрудника, 
    трудовой договор, заявление об увольнении, заявление о приеме на работу 
    и отчет о всех сотрудниках предприятия. `,
    stack: ['C#', 'phpMyAdmin', 'mySQL'],
    features: [
      {
        tooltipText: `Каждый отдел содержит данные о названии и телефоне этого отдела. 
        У отдела есть множество должностей. (связь 1-много)`,
        text: `Добавление, изменение и удаление отдела.`,
      },
      {
        tooltipText: `При добавлении, изменении и увольнении сотрудника генерируются должностые документы 
        в Microsoft Word, такие как персональных данных, анкета нового сотрудника, трудовой договор,
        заявление об увольнении, заявление о приеме на работу. При внесении сотрудника оператору необходимо указать 
        его личные и паспортные данные.`,
        text: `Добавление, изменение и увольнение сотрудника.`,
      },
      {
        tooltipText: `В ИС-Кадры предусмотрено 3 вида прав доступа: 
        ADMIN (полный доступ ко всей функциональности ИС),
        USER+ (доступ ко всей функциональности ИС, кроме добавления, удаления без генерации должностых 
        документов и без доступа ко вкладке "Настройки ИС"),
        USER (доступ к базовой функциональности с возможностью генерации нескольких должностных документов)`,
        text: `Настройка прав пользования ИС.`,
      },
      {
        tooltipText: `Приложение содержит таблицу сотрудников, должностей и отделов с возможностью фильтрации и поиска.`,
        text: `Получение полного списка сотрудников, должностей и отделов на предприятии.`,
      },
      {
        tooltipText: `Для генерации должностных документов на компьютере пользователя необходио наличие ПО Microsoft Word`,
        text: `Генерация таких документов, как согласие на обработку персональных данных, анкета нового сотрудника, 
        трудовой договор, заявление об увольнении, заявление о приеме на работу и отчет о всех сотрудниках предприятия.`,
      },
    ],
    links: [
      {
        title: 'Исходный код [Github]',
        link: 'https://github.com/Sevochka/staff-app',
      },
      {
        title: 'Демонстрация работы [Youtube]',
        link: 'https://www.youtube.com/watch?v=1tKPhCgPJ8k',
      },
      {
        title: 'Документация [GDrive]',
        link:
          'https://drive.google.com/drive/folders/1epodfH_HazcmQNySruAWHKQ7Nd6SI9KE?usp=sharing',
      },
      {
        title: 'Лабораторные работы [GDrive]',
        link:
          'https://drive.google.com/drive/folders/15kIyCOGmOcLmSgOHvM8FBH5bTgxenq3r?usp=sharing',
      },
    ],
    images: [
      {
        original: SuccessAuthorization,
        thumbnail: SuccessAuthorization,
      },
      {
        original: StaffMainPage,
        thumbnail: StaffMainPage,
      },
      {
        original: EmployeesPage,
        thumbnail: EmployeesPage,
      },
      {
        original: ArchivePage,
        thumbnail: ArchivePage,
      },
      {
        original: DocumentPage,
        thumbnail: DocumentPage,
      },
      {
        original: OptionsPage,
        thumbnail: OptionsPage,
      },
      {
        original: ReportDocument,
        thumbnail: ReportDocument,
      },
      {
        original: OrganizationPage,
        thumbnail: OrganizationPage,
      },
      {
        original: AddEmployee,
        thumbnail: AddEmployee,
      },
      {
        original: AddEmployee2,
        thumbnail: AddEmployee2,
      },
      {
        original: AddEmployee3,
        thumbnail: AddEmployee3,
      },
      {
        original: AddEmployee4,
        thumbnail: AddEmployee4,
      },
    ],
  },
];

const getProjectById = (id: number): ProjectData | undefined => {
  return projects.find((p) => p.id === id);
};

export { projects, getProjectById };
