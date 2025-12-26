# Frontend Project

## 📋 Описание

tutorscheduler

## 🚀 Быстрый старт

```bash
# Клонирование репозитория
git clone https://github.com/your-username/project-name.git

# Переход в директорию проекта
cd project-name

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для production
npm run build
```

## 🛠 Технологии

- React
- TypeScript
- Vite
- tw

---

## 🌿 Git Flow

Проект использует **Git Flow** — модель ветвления для организации работы над кодом.

### Основные ветки

| Ветка     | Назначение                   |
| --------- | ---------------------------- |
| `main`    | Стабильная production-версия |
| `develop` | Основная ветка разработки    |

## 📝 Правила именования коммитов

Проект следует спецификации **Conventional Commits**.

### Формат коммита

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Типы коммитов

| Тип        | Описание                                   | Пример                                     |
| ---------- | ------------------------------------------ | ------------------------------------------ |
| `feat`     | Новая функциональность                     | `feat(auth): add login form validation`    |
| `fix`      | Исправление бага                           | `fix(cart): resolve quantity update issue` |
| `docs`     | Изменения в документации                   | `docs(readme): update installation guide`  |
| `style`    | Форматирование, пробелы, точки с запятой   | `style(button): fix indentation`           |
| `refactor` | Рефакторинг без изменения функциональности | `refactor(api): simplify fetch logic`      |
| `perf`     | Улучшение производительности               | `perf(images): add lazy loading`           |
| `test`     | Добавление или исправление тестов          | `test(auth): add unit tests for login`     |
| `build`    | Изменения сборки или зависимостей          | `build(deps): update webpack to v5`        |
| `ci`       | Изменения CI/CD конфигурации               | `ci(github): add deploy workflow`          |
| `chore`    | Рутинные задачи, не влияющие на код        | `chore: update .gitignore`                 |
| `revert`   | Откат предыдущего коммита                  | `revert: feat(auth): add login form`       |

### Scope (область)

Scope указывает на модуль или компонент, который затрагивает коммит:

- `auth` — авторизация
- `ui` — UI компоненты
- `api` — работа с API
- `cart` — корзина
- `profile` — профиль пользователя
- `common` — общие компоненты

### Правила написания subject

- ✅ Используйте повелительное наклонение: `add`, `fix`, `update`, `remove`
- ✅ Начинайте с маленькой буквы
- ✅ Не ставьте точку в конце
- ✅ Максимум 72 символа
- ❌ Не используйте прошедшее время: ~~`added`~~, ~~`fixed`~~

### Примеры коммитов

```bash
# Простой коммит
git commit -m "feat(auth): add password reset functionality"

# Коммит с телом
git commit -m "fix(cart): prevent negative quantity values

Previously users could set negative quantities by
editing the input field directly. Added validation
to ensure minimum value is 1."

# Коммит с breaking change
git commit -m "feat(api)!: change response format for user endpoint

BREAKING CHANGE: user endpoint now returns object instead of array"

# Коммит, закрывающий issue
git commit -m "fix(header): resolve mobile menu overlap

Closes #142"
```

---

## 🔄 Workflow

### Создание новой фичи

```bash
# 1. Обновить develop
git checkout develop
git pull origin develop

# 2. Создать feature-ветку
git checkout -b feature/PROJ-123-new-feature

# 3. Разработка с осмысленными коммитами
git add .
git commit -m "feat(module): add new component"

# 4. Отправить ветку в remote
git push origin feature/PROJ-123-new-feature

# 5. Создать Pull Request в develop
```

### Исправление бага

```bash
# 1. Создать bugfix-ветку от develop
git checkout develop
git checkout -b bugfix/PROJ-456-fix-issue

# 2. Исправить и закоммитить
git commit -m "fix(component): resolve rendering issue"

# 3. Создать Pull Request в develop
```

### Hotfix (срочное исправление)

```bash
# 1. Создать hotfix от main
git checkout main
git checkout -b hotfix/PROJ-789-critical-fix

# 2. Исправить и закоммитить
git commit -m "fix(auth): patch security vulnerability"

# 3. Создать PR в main И в develop
```

---
