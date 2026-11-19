# Agent Skills

Скиллы для Codex, Claude Code и других AI-агентов. Подключайте их в проекте, чтобы агент выбирал подходящий объём работы, использовал существующий код и проверял результат. Для повседневных правок начните с Ponytail и общих правил, для фич из нескольких шагов добавьте `deliver-feature`.

## Быстрый старт

1. В корне проекта выполните команду и выберите агента в меню. Требуется Node.js 22.20 или новее.

   ```sh
   npx skills@1.7.4 add Inforberi/agent-skills --skill deliver-feature ponytail
   ```

   Если Ponytail уже подключён, уберите `ponytail` из команды.
2. Подключите [общие правила](AGENTS.md) отдельно. Добавьте `AGENTS.md` в корень нового проекта или перенесите подходящие правила в действующий файл инструкций агента.
3. Откройте проект в агенте и опишите задачу и результат, который нужно проверить. Для первой задачи можно использовать такой запрос.

   > Найди причину, по которой импорт CSV отклоняет пустые необязательные поля. Исправь и проверь на примере.

Для фичи из нескольких шагов начните запрос с «Используй `deliver-feature`» или вызовите `$deliver-feature` в Codex. Например, попросите добавить предпросмотр импорта CSV, показать ошибки по строкам и проверить подтверждение импорта.

## Как выбрать скилл

| Задача | Скилл |
| --- | --- |
| Исправить локальный баг или добавить небольшое поведение | [`ponytail`](skills/ponytail/SKILL.md) |
| Довести фичу из нескольких шагов до приёмки | [`deliver-feature`](skills/deliver-feature/SKILL.md) |
| Спроектировать экран без макета | [`design-from-brief`](skills/design-from-brief/SKILL.md) |
| Собрать экран по Figma или скриншоту | [`build-from-design`](skills/build-from-design/SKILL.md) |
| Изменить токены, темы или общие компоненты | [`design-system`](skills/design-system/SKILL.md) |
| Уточнить тексты, действия и состояния интерфейса | [`product-ui`](skills/product-ui/SKILL.md) |
| Изменить маршруты, загрузку данных или кеширование | [`nextjs`](skills/nextjs/SKILL.md) или [`sveltekit`](skills/sveltekit/SKILL.md) по стеку проекта |
| Изменить Go API или жизненный цикл горутин | [`go-backend`](skills/go-backend/SKILL.md) |
| Изменить запрос, транзакцию, индекс или миграцию | [`postgresql`](skills/postgresql/SKILL.md) |

Добавьте нужные имена в список после `--skill`. Например, для задачи в Go API с транзакцией PostgreSQL можно подключить оба профиля одной командой.

```sh
npx skills@1.7.4 add Inforberi/agent-skills --skill go-backend postgresql
```

Для фичи по готовому макету добавьте `build-from-design` и `product-ui` к `deliver-feature`. Для экрана без макета выберите `design-from-brief`.

## Другие способы подключения

- **Конкретный агент.** Добавьте `--agent codex` или `--agent claude-code`. Для обоих укажите `--agent codex claude-code`. См. [список поддерживаемых агентов](https://github.com/vercel-labs/skills/blob/main/docs/agents.md).
- **Локальный клон.** Вместо `Inforberi/agent-skills` передайте абсолютный путь к клону. Для фиксированной версии из GitHub укажите `Inforberi/agent-skills@<тег-или-коммит>` с существующей ревизией вместо шаблона.
- **Вручную.** Скопируйте нужную папку из `skills/` целиком. Для Codex используйте `.agents/skills/`, для Claude Code — `.claude/skills/`. Для других агентов смотрите каталог, который читает выбранный агент.
- **Автоматический выбор для крупных задач.** Добавьте [короткое правило](skills/deliver-feature/references/project-routing.md) в существующий файл инструкций проекта, например `AGENTS.md` или `CLAUDE.md`.

## Дополнительные материалы

- [Каталог интеграций и сторонних скиллов](docs/catalog.md)
- [Примеры критериев приёмки](examples/acceptance.md)
- [Шаблоны заданий для реализации и проверки](skills/deliver-feature/references/handoff.md)
- [Методика сравнения инструкций и результаты пилота](evals/README.md)
