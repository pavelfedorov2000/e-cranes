# Cranes Engineering
**Редизайн страниц сайта**

http://pavfed.com/cranes/

<img src="https://github.com/pavelfedorov2000/e-cranes/assets/66357864/698da64e-14fb-4fb8-9aa4-8bb85bba64f6" />
<img src="https://github.com/pavelfedorov2000/e-cranes/assets/66357864/6f9a4ca7-2ccc-43c9-84b5-be4ee8f76a86" />
<img src="https://github.com/pavelfedorov2000/e-cranes/assets/66357864/25bdd358-499e-4868-95b9-297372f20178" />
<img src="https://github.com/pavelfedorov2000/e-cranes/assets/66357864/1d99a048-19e5-4525-bf8a-350bec9c6666" />
<img src="https://github.com/pavelfedorov2000/e-cranes/assets/66357864/128a2e4d-445e-4295-a02c-09d388ca3644" />
<img src="https://github.com/pavelfedorov2000/e-cranes/assets/66357864/63702134-4829-4227-b266-6c039a32596f" />
<img src="https://github.com/pavelfedorov2000/e-cranes/assets/66357864/0e882521-95db-4d72-86e0-fdd63d9a21ba" />
<img src="https://github.com/pavelfedorov2000/e-cranes/assets/66357864/88b1b8a4-4a8b-4f84-8b17-690693184095" />
<img src="https://github.com/pavelfedorov2000/e-cranes/assets/66357864/d5ef286e-f5c0-45d5-bcd2-5ef5a4694905" />
<img src="https://github.com/pavelfedorov2000/e-cranes/assets/66357864/834796bc-90bd-48af-854a-91cb54c2ac2d" />

## Команды для запуска

### Запуск с отслеживанием изменений
```
npm run dev
```

### Финальная (production) сборка
```
npm run deploy
```

Команда оптимизирует, минифицирует файлы и собирает проект в папку `dist`


## Структура папок и файлов
```
├── app/                              # Исходники
│   ├── blocks/                       # Блоки
│   │   ├── block/                    # Блок
│   │   │    ├── block.html           # Разметка блока
│   │   │    ├── block.js             # Скрипт блока
│   │   │    └── block.scss           # Стили блока
│   │   ├── footer/                   # Футер сайта
│   │   │    ├── footer.html          # Начальная разметка футера сайта
│   │   │    └── footer.scss          # Начальные стили футера сайта
│   │   ├── head/                     # Секция head
│   │   │    └── head.html            # Разметка секции head и открывающие тэги документа
│   │   ├── header/                   # Шапка сайта
│   │   │    ├── header.html          # Начальная разметка шапки сайта
│   │   │    └── header.scss          # Начальные стили шапки сайта
│   │   └── link/                     # Подключение скриптов
│   │        └── link.html            # Разметка с подключаемыми скриптами и закрывающе тэги документа
│   ├── data/                         # Данные в формате JSON
│   ├── images/                       # Изображения
│   │   └── sprite-icons /            # SVG иконки для генерации векторного спрайта
│   ├── pages/                        # Страницы
│   │   └── index.html                # Разметка страницы
│   ├── resources/                    # Статические файлы для копирования в dist
│   ├── scripts/                      # Скрипты
│   │   ├── common/                   # Вспомогательные функции проекта
│   │   │   └── addLibs.js            # Файл содержащий методы для динамического добавления библиотек
│   │   ├── app.js                    # Главный скрипт
│   │   └── init.js                   # Подключение модулей проекта
│   └── styles/                       # Стили
│       ├── common/                   # Общие стили
│       │   └── common.scss           # Общие стили сайта
│       ├── helpers/                  # Помощники
│       │   ├── fonts.scss            # Подключение шрифтов
│       │   ├── mixins.scss           # Примеси
│       │   ├── nojs.scss             # Сообщение об отключенном js
│       │   ├── optimize.scss         # Сброс стилей и фиксы
│       │   ├── sprite_template.scss  # Переменные с размерами SVG иконок (автосборка)
│       │   └── variables.scss        # Переменные
│       └── app.scss                  # Главный стилевой файл
├── dist/                             # Сборка (автогенерация)
│   ├── assets/                       # Подключаемые ресурсы
│   │   ├── libs/                     # Файлы сторонних библиотек
│   │   │   ├── js/                   # JS файлы библиотек
│   │   │   └── css/                  # CSS файлы библиотек
│   │   ├── fonts/                    # Шрифты
│   │   ├── images/                   # Изображения
│   │   │   └── sprites/              # Спрайты (автогенерация)
│   │   ├── scripts/                  # Скрипты
│   │   └── styles/                   # Стили
│   └── index.html                    # Страница
├── tasks/                            # Подключаемые скрипты с задачами для gulpfile.babel.js
│   ├── config.js                     # Конфигурация
│   ├── copy.js                       # Копирование
│   ├── images.js                     # Сборка картинок
│   ├── libs.js                       # Сборка сторонних библиотек
│   ├── rename-predist.js             # Переименование dist папки при production-сборке
│   ├── scripts.js                    # Сборка скриптов
│   ├── sprite.js                     # Сборка векторного спрайта
│   ├── styles.js                     # Сборка стилей
│   ├── templates.js                  # Сборка страниц из шаблонов
│   ├── watch.js                      # Отслеживание изменений и запуск задач
│   └── zip.js                        # Архивация папки dist
├── .babelrc                          # Конфигурация babel
├── browserlist                       # Список версий браузеров для задач Gulp
├── .editorconfig                     # Конфигурация настроек редактора кода
├── .eslintignore                     # Список исключений для проверки JavaScript в ESLint
├── .eslintrc                         # Конфигурация проверки JavaScript в ESLint
├── .gitignore                        # Список исключённых файлов из Git
├── .lintstagedrc                     # Конфикугация lint-staged для husky
├── .sass-lint.yml                    # Конфигурация проверки SCSS в StyleLint
├── .stylelintrc                      # Конфигурация проверки SCSS в StyleLint
├── gulpfile.babel.js                 # Файл для запуска Gulp.js
├── make-block.js                     # Утилита создания новых блоков
├── libs-links.js                     # Пути к сторонним библиотекам
├── make-block.js                     # Скрипт создания структурных модулей проекта
├── package.json                      # Список модулей и прочей информации
└── README.md                         # Документация шаблона
```
