# Каталог

Подключайте дополнения к конкретному проекту. Роль `deliver-feature` — выбрать подходящий скилл среди доступных и следовать правилам проекта для внешних инструментов.

## Основной набор

| Скиллы | Источник |
| --- | --- |
| `setup-agent-skills` | [Подбор и установка скиллов по контексту проекта](../skills/setup-agent-skills/SKILL.md). |
| `deliver-feature`, `design-from-brief`, `build-from-design`, `design-system`, `product-ui` | Этот репозиторий. |
| `ponytail` | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail/tree/96608e078b2d5ea607c5c3b8b5a54d1c1fba6846/skills/ponytail), версия 5.3.3, коммит `96608e078b2d5ea607c5c3b8b5a54d1c1fba6846`. [Лицензия MIT](../skills/ponytail/LICENSE). Текст инструкций сохранён, из метаданных убрана подсказка аргументов для отдельных агентов. |

Для переключателей режима и хуков см. [официальную установку Ponytail](https://github.com/DietrichGebert/ponytail/blob/main/INSTALL.md). Если плагин уже установлен, выбирайте его версию при работе в этом агенте.

## Дизайн и проверка

| Скилл | Когда подключать | Где взять |
| --- | --- | --- |
| `apple-design` | Жесты, панели, пространственная обратная связь и прерываемое движение. | Используйте установленный скилл, если он есть в агенте. Для платформенных паттернов см. [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/). |
| `mobile-native` | Сенсорный ввод, прокрутка, viewport и клавиатура мобильного браузера. | Используйте установленный скилл, если он есть в агенте. |
| `impeccable` | Визуальное направление, варианты до кода, полировка и аудит. | [pbakaus/impeccable](https://github.com/pbakaus/impeccable). |
| `frontend-design` | Выбор композиции и визуального направления для нового экрана. | Используйте установленный скилл или [anthropics/skills](https://github.com/anthropics/skills/tree/main/skills/frontend-design). |
| `web-design-guidelines` | Целевое ревью доступности и реализации интерфейса. | [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines). |
| `playwright-cli` | Интерактивные браузерные сценарии и скриншоты по разрешению пользователя, когда проверок проекта недостаточно. | [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli#installation). Скиллу требуется соответствующая CLI. |
| `openpencil-workflow` | Замеры кадра и сверка дизайна через локальный OpenPencil MCP. Подключайте для задач в OpenPencil. | [Профиль этого набора](../skills/openpencil-workflow/SKILL.md). Для справки по инструментам доступен [официальный скилл `open-pencil`](https://github.com/open-pencil/open-pencil/tree/master/skills/open-pencil). |
| `figma-design-to-code` | Получение точного контекста и сопоставлений для реализации по Figma. | Используйте установленную интеграцию Figma и её штатный процесс. |

## Профили стека

- [`nextjs`](../skills/nextjs/SKILL.md) — выберите его для Next.js. Для задач производительности React также можно подключить [Vercel React Best Practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices).
- [`sveltekit`](../skills/sveltekit/SKILL.md) — выберите его для SvelteKit. При наличии нужного инструментария можно подключить [официальный `svelte-code-writer`](https://svelte.dev/docs/ai/overview).
- [`go-backend`](../skills/go-backend/SKILL.md) — Go API, отмена запроса и жизненный цикл горутин.
- [`postgresql`](../skills/postgresql/SKILL.md) — SQL, индексы, конкурентные транзакции и миграции с учётом версии сервера.

## Навигация по крупным проектам

Graphify полезен, когда нужно выяснить, как связаны несколько модулей или сервисов. Его подключают отдельно к конкретному проекту. Для первого прогона можно построить локальный граф только по коду с `--code-only`. Используйте граф для поиска нужных файлов и сверяйте связи по исходникам. [Установка и команды Graphify](https://github.com/Graphify-Labs/graphify#install)

## Ручной выбор

Чтобы самостоятельно установить конкретные профили, передайте их имена после `--skill`. Например, для Go-приложения с транзакциями PostgreSQL:

```sh
npx --yes skills@1.7.4 add Inforberi/agent-skills --skill go-backend postgresql
```

Вместо имени репозитория можно передать путь к локальному клону. Чтобы явно выбирать `deliver-feature` для многошаговой работы, добавьте [правило маршрутизации](../skills/deliver-feature/references/project-routing.md) в действующие инструкции проекта.
