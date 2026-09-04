# Aeterna AI Landing Page

<p align="center">
  <img src="https://img.shields.io/badge/Aeterna-AI-blueviolet?style=for-the-badge" alt="Aeterna AI">
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">
</p>

<p align="center"><em>Transform your business with cutting-edge AI solutions designed for small businesses</em></p>

---

## 🌟 Overview

**Aeterna AI** — профессиональный лендинг AI-сервисов для владельцев малого бизнеса. Сайт построен на Node.js, Express и EJS и рассказывает об AI-интеграциях и разработке продуктов с элегантным интерфейсом и интерактивными элементами.

## ✨ Key Features

- 📱 **Modern Responsive Design** — полностью адаптивная вёрстка для всех устройств
- 📩 **Contact Form Integration** — прямая интеграция с Google Sheets API
- ⚡ **Fast Loading Times** — оптимизация производительности
- 🎨 **Clean UI/UX Design** — профессиональный макет, ориентированный на конверсию
- 🔒 **Secure Data Handling** — валидация и безопасная передача данных формы

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [Node.js](https://nodejs.org/) | Серверный рантайм |
| [Express.js](https://expressjs.com/) | Веб-фреймворк |
| [EJS](https://ejs.co/) | Шаблонизация |
| [Vanilla JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Клиентская логика |
| [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Стилизация и адаптив |
| [Google Sheets API](https://developers.google.com/sheets) | Сбор и хранение данных |

## 🚀 Установка и запуск

### Требования
- [Node.js](https://nodejs.org/) v14+
- [npm](https://www.npmjs.com/) или [yarn](https://yarnpkg.com/)

### Шаги

```bash
# 1. Клонируйте репозиторий
git clone <repository-url>
cd aeterna-ai-landing-page

# 2. Установите зависимости
npm install

# 3. Настройте переменные окружения
#    Создайте .env в корне проекта:
#    GOOGLE_SHEET_ID=your_google_sheet_id_here

# 4. Поместите ключ сервисного аккаунта Google
#    в файл google-service-account.json в корне проекта

# 5. Запустите dev-сервер
npm run dev

# Или в продакшене:
npm start
```

Откройте [http://localhost:3000](http://localhost:3000).

## 📁 Структура проекта

```
aeterna-ai-landing-page/
├── server.js                    # Конфигурация Express-сервера
├── package.json
├── .env                         # Переменные окружения (не в git)
├── google-service-account.json  # Ключи Google (не в git)
├── src/
│   ├── public/
│   │   ├── css/
│   │   │   └── style.css        # Основные стили
│   │   └── js/
│   │       └── main.js          # Клиентская логика
│   └── views/
│       ├── index.ejs            # Главная страница
│       └── contact.ejs          # Страница контактов
└── node_modules/                # Зависимости (не в git)
```

## 🔧 Ключевая функциональность

### Контактная форма
- Валидация и обработка отправки формы
- Интеграция с Google Sheets API
- Безопасная передача данных на основе окружения
- Сообщения об успехе/ошибке

### Адаптивный дизайн
- Mobile-first подход с media queries
- CSS Grid и Flexbox
- Оптимизированные touch-цели

### Обработка данных
- Безопасная обработка отправок
- Валидация обязательных полей
- Обработка ошибок API
- Логирование для отладки

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку (`git checkout -b feature/amazing-feature`)
3. Закоммитьте изменения (`git commit -m 'Add amazing feature'`)
4. Запушьте ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📄 Лицензия

Проект распространяется под лицензией MIT — см. файл [LICENSE](LICENSE).

## 📬 Поддержка

По вопросам поддержки обращайтесь в команду Aeterna AI.

---

<p align="center">Made with ❤ by Aeterna Gate</p>
