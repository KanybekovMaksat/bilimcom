const Questions = [
    {
      title: "Урок 1: Основы HTML",
      questions: [
        {
          question: "Что означает HTML?",
          options: [
            "Язык разметки гипертекста",
            "Язык разметки домашних инструментов",
            "Язык гиперссылок и текста",
            "Язык разметки гипертрансфера"
          ],
          correctAnswer: "Язык разметки гипертекста"
        },
        {
          question: "Какой HTML элемент используется для определения заголовка документа?",
          options: ["<title>", "<head>", "<meta>", "<header>"],
          correctAnswer: "<title>"
        },
        {
          question: "Какой HTML элемент используется для вставки переноса строки?",
          options: ["<break>", "<lb>", "<br>", "<line>"],
          correctAnswer: "<br>"
        },
        {
          question: "Какой атрибут используется в HTML для указания URL изображения?",
          options: ["src", "href", "link", "url"],
          correctAnswer: "src"
        },
        {
          question: "Как создать нумерованный список в HTML?",
          options: ["<ul>", "<list>", "<ol>", "<dl>"],
          correctAnswer: "<ol>"
        },
        {
          question: "Какой тег используется для создания параграфа?",
          options: ["<p>", "<paragraph>", "<text>", "<div>"],
          correctAnswer: "<p>"
        },
        {
          question: "Какой тег используется для вставки изображения?",
          options: ["<img>", "<picture>", "<image>", "<src>"],
          correctAnswer: "<img>"
        },
        {
          question: "Какой атрибут определяет высоту изображения?",
          options: ["height", "width", "size", "scale"],
          correctAnswer: "height"
        },
        {
          question: "Какой тег используется для создания таблицы?",
          options: ["<table>", "<tab>", "<tr>", "<td>"],
          correctAnswer: "<table>"
        },
        {
          question: "Какой атрибут указывает, что таблица должна быть разделена на строки?",
          options: ["rowspan", "colspan", "border", "split"],
          correctAnswer: "rowspan"
        }
      ]
    },
    
    {
      title: "Урок 2: Более сложные элементы HTML",
      questions: [
        {
          question: "Какой элемент используется для создания выпадающего списка?",
          options: ["<select>", "<dropdown>", "<list>", "<option>"],
          correctAnswer: "<select>"
        },
        {
          question: "Какой атрибут используется для установки значения по умолчанию в поле ввода?",
          options: ["value", "default", "placeholder", "init"],
          correctAnswer: "value"
        },
        {
          question: "Какой тег используется для создания раздела в HTML?",
          options: ["<section>", "<div>", "<article>", "<group>"],
          correctAnswer: "<section>"
        },
        {
          question: "Какой тег используется для создания ссылки?",
          options: ["<link>", "<a>", "<url>", "<href>"],
          correctAnswer: "<a>"
        },
        {
          question: "Как задать целевую страницу для ссылки?",
          options: ["target", "href", "link", "destination"],
          correctAnswer: "target"
        },
        {
          question: "Какой атрибут используется для установки стиля элемента?",
          options: ["style", "css", "class", "id"],
          correctAnswer: "style"
        },
        {
          question: "Какой тег используется для вставки аудио?",
          options: ["<audio>", "<music>", "<sound>", "<media>"],
          correctAnswer: "<audio>"
        },
        {
          question: "Какой тег используется для вставки видео?",
          options: ["<video>", "<film>", "<movie>", "<clip>"],
          correctAnswer: "<video>"
        },
        {
          question: "Какой элемент используется для выделения текста?",
          options: ["<strong>", "<b>", "<em>", "<highlight>"],
          correctAnswer: "<strong>"
        },
        {
          question: "Какой элемент используется для создания метаинформации в документе?",
          options: ["<meta>", "<info>", "<head>", "<title>"],
          correctAnswer: "<meta>"
        }
      ]
    },
    {
      title: "Урок 3: Атрибуты и семантика HTML",
      questions: [
        {
          question: "Какой атрибут используется для указания языка документа?",
          options: ["lang", "language", "code", "xml:lang"],
          correctAnswer: "lang"
        },
        {
          question: "Какой элемент используется для навигации по страницам?",
          options: ["<nav>", "<menu>", "<navigation>", "<link>"],
          correctAnswer: "<nav>"
        },
        {
          question: "Какой атрибут указывает на контекст для ссылок?",
          options: ["rel", "context", "link", "type"],
          correctAnswer: "rel"
        },
        {
          question: "Какой тег используется для обозначения заголовка первого уровня?",
          options: ["<h1>", "<header>", "<title>", "<h>"],
          correctAnswer: "<h1>"
        },
        {
          question: "Какой тег используется для создания списка определений?",
          options: ["<dl>", "<def>", "<list>", "<description>"],
          correctAnswer: "<dl>"
        },
        {
          question: "Какой элемент используется для обозначения цитаты?",
          options: ["<q>", "<cite>", "<blockquote>", "<quote>"],
          correctAnswer: "<blockquote>"
        },
        {
          question: "Какой атрибут используется для задания идентификатора элемента?",
          options: ["id", "name", "class", "data-id"],
          correctAnswer: "id"
        },
        {
          question: "Какой атрибут используется для задания класса элемента?",
          options: ["class", "type", "style", "data-class"],
          correctAnswer: "class"
        },
        {
          question: "Какой элемент используется для создания футера страницы?",
          options: ["<footer>", "<bottom>", "<end>", "<foot>"],
          correctAnswer: "<footer>"
        },
        {
          question: "Какой тег используется для создания метатегов в HTML?",
          options: ["<meta>", "<tag>", "<head>", "<info>"],
          correctAnswer: "<meta>"
        }
      ]
    },
    {
      title: "Урок 4: Формы и валидация",
      questions: [
        {
          question: "Какой HTML элемент используется для создания формы?",
          options: ["<form>", "<input>", "<textarea>", "<label>"],
          correctAnswer: "<form>"
        },
        {
          question: "Какой атрибут указывает на метод отправки формы?",
          options: ["method", "action", "enctype", "target"],
          correctAnswer: "method"
        },
        {
          question: "Какой тип поля ввода используется для ввода пароля?",
          options: ["text", "password", "hidden", "secure"],
          correctAnswer: "password"
        },
        {
          question: "Какой элемент используется для создания текстовой области?",
          options: ["<input>", "<textarea>", "<form>", "<field>"],
          correctAnswer: "<textarea>"
        },
        {
          question: "Какой атрибут делает поле ввода обязательным?",
          options: ["required", "mandatory", "must", "input-required"],
          correctAnswer: "required"
        },
        {
          question: "Как создать выпадающий список?",
          options: ["<select>", "<dropdown>", "<list>", "<option>"],
          correctAnswer: "<select>"
        },
        {
          question: "Как задать текстовую метку для элемента формы?",
          options: ["<label>", "<tag>", "<text>", "<caption>"],
          correctAnswer: "<label>"
        },
        {
          question: "Какое событие происходит, когда пользователь изменяет значение элемента?",
          options: ["change", "input", "submit", "focus"],
          correctAnswer: "input"
        },
        {
          question: "Какой элемент используется для создания кнопки отправки формы?",
          options: ["<button>", "<input type='submit'>", "<submit>", "<click>"],
          correctAnswer: "<button>"
        },
        {
          question: "Как предотвратить стандартное поведение отправки формы?",
          options: ["event.preventDefault()", "return false;", "stopSubmit()", "cancel()"],
          correctAnswer: "event.preventDefault()"
        }
      ]
    },
    {
      title: "Урок 5: Семантические элементы и доступность",
      questions: [
        {
          question: "Какой тег используется для обозначения основного содержимого страницы?",
          options: ["<main>", "<content>", "<body>", "<section>"],
          correctAnswer: "<main>"
        },
        {
          question: "Какой атрибут используется для улучшения доступности изображений?",
          options: ["alt", "title", "desc", "label"],
          correctAnswer: "alt"
        },
        {
          question: "Какой тег используется для создания навигации по страницам?",
          options: ["<nav>", "<menu>", "<ul>", "<ol>"],
          correctAnswer: "<nav>"
        },
        {
          question: "Какой элемент используется для создания кнопки?",
          options: ["<button>", "<input type='button'>", "<link>", "<a>"],
          correctAnswer: "<button>"
        },
        {
          question: "Какой атрибут указывает, что элемент не должен быть взаимодействующим?",
          options: ["disabled", "readonly", "inactive", "hidden"],
          correctAnswer: "disabled"
        },
        {
          question: "Какой тег используется для обозначения цитаты?",
          options: ["<q>", "<cite>", "<blockquote>", "<quote>"],
          correctAnswer: "<blockquote>"
        },
        {
          question: "Какой атрибут позволяет задавать дополнительный текст для поля ввода?",
          options: ["placeholder", "default", "hint", "label"],
          correctAnswer: "placeholder"
        },
        {
          question: "Какой тег используется для создания раздела на странице?",
          options: ["<section>", "<div>", "<part>", "<group>"],
          correctAnswer: "<section>"
        },
        {
          question: "Какой атрибут используется для связи ссылки с внешним ресурсом?",
          options: ["rel", "link", "href", "target"],
          correctAnswer: "rel"
        },
        {
          question: "Какой элемент используется для создания списка определений?",
          options: ["<dl>", "<list>", "<def>", "<description>"],
          correctAnswer: "<dl>"
        }
      ]
    },
    {
      title: "Урок 6: HTML5 и мультимедиа",
      questions: [
        {
          question: "Какой элемент используется для вставки аудиофайла?",
          options: ["<audio>", "<music>", "<sound>", "<media>"],
          correctAnswer: "<audio>"
        },
        {
          question: "Какой атрибут указывает на источник аудиофайла?",
          options: ["src", "source", "file", "audio-src"],
          correctAnswer: "src"
        },
        {
          question: "Какой элемент используется для вставки видеофайла?",
          options: ["<video>", "<film>", "<clip>", "<movie>"],
          correctAnswer: "<video>"
        },
        {
          question: "Какой атрибут позволяет управлять автоматическим воспроизведением видео?",
          options: ["autoplay", "play", "start", "loop"],
          correctAnswer: "autoplay"
        },
        {
          question: "Какой элемент используется для создания канваса для рисования?",
          options: ["<canvas>", "<draw>", "<graphics>", "<paint>"],
          correctAnswer: "<canvas>"
        },
        {
          question: "Какой тег используется для создания встроенной SVG-графики?",
          options: ["<svg>", "<image>", "<graphic>", "<vector>"],
          correctAnswer: "<svg>"
        },
        {
          question: "Какой атрибут указывает, что видео должно повторяться?",
          options: ["loop", "repeat", "cycle", "resume"],
          correctAnswer: "loop"
        },
        {
          question: "Какой атрибут указывает, что видео должно отображаться в полноэкранном режиме?",
          options: ["fullscreen", "allowfullscreen", "expand", "maxscreen"],
          correctAnswer: "allowfullscreen"
        },
        {
          question: "Какой элемент используется для отображения векторной графики?",
          options: ["<svg>", "<canvas>", "<img>", "<draw>"],
          correctAnswer: "<svg>"
        },
        {
          question: "Какой атрибут указывает на текст, который будет отображаться, если браузер не поддерживает видео?",
          options: ["fallback", "alt", "poster", "title"],
          correctAnswer: "poster"
        }
      ]
    },
    {
      title: "Урок 7: Оптимизация и семантика",
      questions: [
        {
          question: "Какой тег используется для обозначения метаданных страницы?",
          options: ["<meta>", "<head>", "<info>", "<title>"],
          correctAnswer: "<meta>"
        },
        {
          question: "Какой атрибут позволяет указать описание страницы для поисковых систем?",
          options: ["description", "meta", "content", "keywords"],
          correctAnswer: "description"
        },
        {
          question: "Какой элемент используется для обозначения навигационного меню?",
          options: ["<nav>", "<menu>", "<list>", "<link>"],
          correctAnswer: "<nav>"
        },
        {
          question: "Какой атрибут указывает, что документ HTML является валидным?",
          options: ["<!DOCTYPE html>", "<doctype>", "<html>", "<head>"],
          correctAnswer: "<!DOCTYPE html>"
        },
        {
          question: "Какой элемент используется для обозначения важного текста?",
          options: ["<strong>", "<important>", "<em>", "<b>"],
          correctAnswer: "<strong>"
        },
        {
          question: "Какой тег используется для создания мета-тегов ключевых слов?",
          options: ["<meta>", "<keywords>", "<tags>", "<head>"],
          correctAnswer: "<meta>"
        },
        {
          question: "Какой атрибут используется для указания кодировки документа?",
          options: ["charset", "encoding", "type", "code"],
          correctAnswer: "charset"
        },
        {
          question: "Какой тег используется для создания разметки в HTML5?",
          options: ["<section>", "<article>", "<aside>", "<header>"],
          correctAnswer: "<article>"
        },
        {
          question: "Какой атрибут указывает на изображение, которое будет отображаться, пока загружается видео?",
          options: ["poster", "thumbnail", "preview", "image"],
          correctAnswer: "poster"
        },
        {
          question: "Какой тег используется для создания списка с ненумерованными элементами?",
          options: ["<ul>", "<ol>", "<list>", "<item>"],
          correctAnswer: "<ul>"
        }
      ]
    }
  ];

export default Questions