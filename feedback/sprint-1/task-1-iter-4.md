# Задача 1. Итерация 4 ✅

| Ср. оценка  | Проходной балл | Статус         |
|:-----------:|:--------------:|:--------------:|
| ⭐ 4 | ⭐ 4 | ✅ Завершено |

## RightNow (Александр) – ⭐ 5

### ПЛЮСЫ 👍

Привет, Никита!

Pixel perfect!

Проект улучшается с последнего ревью приятно видеть.

Добавлена анимация

### БАГИ 🐞

горизонтальный скрол в sideBar

отмечали выше - - applayout.css должен называться  appLayout.module.css

### РЕКОМЕНДАЦИИ 💡

Поправить небольшие баги

----

## GeorgeFrontDev (Георгий) – ⭐ 5

### ПЛЮСЫ 👍

Плюсы:

1. Великолепный pixel perfect
2. Хороший скролл при маленькой высоте (как и нужно по ТЗ)
3. Комментарии к css переменным
4. Подключены alias пути
5. Хорошая семантика
6. Логотип - ссылка

### БАГИ 🐞

Скриншоты:

- ![скрин 1](https://filestore.preax.ru/file?id=YVjVjaZVLfLe&w=2056&h=536)
- ![скрин 2](https://filestore.preax.ru/file?id=k1OmGlRCtWKP&w=2018&h=1182)

Баги:

1. Некритично: Файл reboot.css просто создан и никуда не подключен. Лучше перенести его стили в global или normalize
2. Некритично: Не везде используете alias пути (например, Content.jsx, AppLayout.jsx)
3. Некритично: Неиспользуемый импорт IncomingTasks в AppLayout.jsx
4. Некритично: box-shadow у Header почему-то не во всю ширину (см.фото). Можете проверить через devtools увеличив размер box-shadow
5. Критично: В отличии от основного блока, который скроллится идеально, у SideBar небольшая проблема - верхняя часть картинки съедается (см.фото)

### РЕКОМЕНДАЦИИ 💡

Реки:

1. Добавьте флаг `—open` в `package.json`, чтобы сразу открывался браузер (`«dev»: «vite —open»`)
2. Используйте barrel экспорты: добавьте в каждый компонент `index.js`, в котором будет одна строка - `export { default } from './ComponentName.jsx'` Это упростит импорты (будет ``import { Logo } from "../logo";` вместо `import { Logo } from "../logo/Logo";` (код будет выглядеть профессиональнее) 

Здравствуйте, Никита! Отличная работа! Есть конечно, парочка недостатков, но они легко исправимые. Уверен, Вы их без проблем исправите, поэтому поставлю Вам высокую оценку. Удачи в продолжении!

----

## Dallin (Данил) – ⭐ 2

### ПЛЮСЫ 👍

1. **Архитектура компонентов**

#### Организация файлов

- Каждый компонент и его CSS-файл расположены в одной папке
- Возможность без затруднений добавлять новые элементы при расширении проекта

#### Соглашение об именовании

- **Компоненты**: PascalCase (Header, Button, NavBar)
- **Папки**: kebab-case (header, button, nav-bar)

2. **Семантическая верстка**

#### Используемые HTML-теги

- [`<header>`](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) — для шапки
- [`<footer>`](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) — для подвала
- [`<nav>`](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) — для навигации
- [`<aside>`](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) — для боковых панелей
- [`<main>`](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) — для основного контента

#### Структурные элементы

- Списки: [`<ul>`](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) и [`<li>`](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html)
- Кнопки: [`<button>`](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html)

3. **Design System**

#### Палитра цветов

- Все цвета определены через CSS переменные в [variables.css](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html)
- Централизованное управление стилизацией

#### Шрифты

- Загружаются из локальных файлов
- Не зависят от внешних сервисов

#### Единообразность

- Стилизация элементов выполнена консистентно по всему проекту

4. **Layout и адаптивность**

#### Структура страницы

- **Header** (зафиксирован вверху)
- **Content** (основной контент)
- **Footer**

#### Независимые области прокрутки

- NavBar (левая панель)
- MainContent (центр)
- SideBar (правая панель)

#### Ограничения размеров

- Минимальная ширина экрана: 1280px
- При прокрутке Header остаётся видимым

5. **Документация**

#### README

- Описание запуска проекта
- Описание сборки проекта
- Инструкции для новых участников команды

#### Доступность информации

- Новый участник легко разберётся в структуре и рабочих процессах проекта

### БАГИ 🐞

#### **Критические баги** 🔴

#### 1. Дублирование CSS файлов в layouts

**Файл**: [src/layouts/applayout/](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html)

- Присутствуют оба файла: [applayout.css](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) и [applayout.module.css](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) с разным содержимым
- **Причина**: Нарушение пункта ТЗ — "каждый компонент и его module.css стили лежат в одной папке"
- **Действие**: Удалить [applayout.css](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html), оставить только [applayout.module.css](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html)

#### 2. Неправильная разметка Grid в AppLayout

**Файл**: [src/layouts/applayout/applayout.module.css](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html)

- В [applayout.css](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) используется `display: flex` вместо `grid`
- Это может привести к неправильному позиционированию при разной высоте контента
- **Действие**: Унифицировать стили, убедиться что Header прижат вверху, контент растягивается, Footer прижат вниз

**Некритические баги** 🟡

#### 1. Неиспользуемый импорт

**Файл**: [src/layouts/applayout/AppLayout.jsx](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) (строка 4)

- Импортируется [IncomingTasks](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html), но не используется в компоненте
- **Действие**: Удалить импорт

#### 2. Неправильное имя переменной

**Файл**: [src/components/navBar/NavBar.jsx](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) (строка 4)

- Переменная [message](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) содержит навигационные элементы
- **Действие**: Переименовать на `navigationItems` или `navLinks`

#### 3. Несогласованность табуляции

**Файл**: [src/layouts/applayout/applayout.module.css](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html)

- Используются табуляции вместо пробелов (как в остальных CSS файлах)
- **Действие**: Привести к единому стилю (4 пробела)

#### 4. Неправильные отступы в JSX

**Файл**: [src/components/content/Content.jsx](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) (строки 10-12)

- [`<NavBar/>`](vscode-file://vscode-app/c:/Users/garya/AppData/Local/Programs/Microsoft%20VS%20Code/034f571df5/resources/app/out/vs/code/electron-browser/workbench/workbench.html) и другие элементы имеют неправильное выравнивание
- **Действие**: Привести отступы к одному стилю (4 пробела на уровень вложенности)

### РЕКОМЕНДАЦИИ 💡

1. **Добавить описание пропсов компонентов**

Каждый компонент принимает какие-то параметры (пропсы). Сейчас не очевидно, какие именно пропсы нужны и какой тип данных они имеют. Можно добавить JSDoc-комментарии перед каждым компонентом, чтобы IDE подсказывала разработчику, что нужно передать. Это сэкономит время и избежит ошибок при использовании компонентов

2. **Создать подпапки внутри components для лучшей организации**

По мере роста проекта в папке components станет много файлов. Имеет смысл разделить компоненты на категории: переиспользуемые компоненты (button, logo), компоненты раскладки (header, footer), специфичные компоненты для страниц (navbar). Это поможет быстро найти нужный компонент и понять, где его можно применить

3. **Улучшить доступность сайта**

Сейчас компоненты работают, но их сложнее использовать людям со скринридерами. Можно добавить текстовые описания для интерактивных элементов через атрибуты aria-label, указать назначение регионов страницы через aria-label на семантические теги. Это улучшит SEO и сделает приложение доступным для всех пользователей

4. **Структурировать порядок импортов**

В компонентах импорты идут вразброс: стили, компоненты, потом снова стили. Стоит привести к единому порядку: сначала встроенные модули React, потом внешние библиотеки, потом компоненты, в конце стили. Это облегчит чтение кода и сделает его более профессиональным.
