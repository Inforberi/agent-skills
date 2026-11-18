# Каталог

Подключайте дополнения к конкретному проекту. Роль `deliver-feature` — выбрать подходящий скилл среди доступных и следовать правилам проекта для внешних инструментов.

## Основной набор

| Скиллы | Источник |
| --- | --- |
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
| `playwright-cli` | Ручные браузерные сценарии и скриншоты, когда средств проекта недостаточно. | [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli#installation). Скиллу требуется соответствующая CLI. |
| `figma-design-to-code` | Получение точного контекста и сопоставлений для реализации по Figma. | Используйте установленную интеграцию Figma и её штатный процесс. |

## Профили стека

- [`nextjs`](../skills/nextjs/SKILL.md) — выберите его для Next.js. Для задач производительности React также можно подключить [Vercel React Best Practices](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices).
- [`sveltekit`](../skills/sveltekit/SKILL.md) — выберите его для SvelteKit. При наличии нужного инструментария можно подключить [официальный `svelte-code-writer`](https://svelte.dev/docs/ai/overview).

Устанавливайте профиль той же командой, что и основной набор, передав `--skill nextjs` или `--skill sveltekit`. Если нужный профиль известен сразу, добавьте его в список скиллов при первом импорте.
