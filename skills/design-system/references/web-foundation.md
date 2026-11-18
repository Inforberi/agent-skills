# Минимальная веб-основа

Для веб-проекта со стилями CSS можно начать с переменных темы и небольшой шкалы. Если проект уже хранит эти решения в другой форме, используй его соглашения. Ниже значения условные, а имена показывают назначение.

```css
:root {
  --font-ui: system-ui, sans-serif;
  --font-heading: var(--font-ui);
  --body-size: 1rem;
  --body-leading: 1.5;
  --heading-size: 1.5rem;
  --heading-leading: 1.25;
  --heading-weight: 650;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --surface: #ffffff;
  --text-default: #18222e;
  --action-primary: #174ea6;
  --on-action-primary: #ffffff;
}

body {
  color: var(--text-default);
  background: var(--surface);
  font: var(--body-size) / var(--body-leading) var(--font-ui);
}

.text-heading {
  font-family: var(--font-heading);
  font-size: var(--heading-size);
  line-height: var(--heading-leading);
  font-weight: var(--heading-weight);
}

.primary-button {
  color: var(--on-action-primary);
  background: var(--action-primary);
  padding: var(--space-2) var(--space-3);
}

.page-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
}
```

Если у заголовков отдельная гарнитура, задай её в `--font-heading`. `--space-4` можно переиспользовать для расстояния между элементами. Если изменение плотности панели затрагивает только её, настрой композицию панели. Если меняется цвет основного действия, обнови `--action-primary` и проверь потребителей и контраст с `--on-action-primary`. При необходимости выдели отдельные роли для наведения и нажатия. Стили фокуса и доступные состояния проверяй в самом компоненте.

Дополнительные источники для проектов со своей системой доступности или обменом токенами.

- [CSS Custom Properties](https://www.w3.org/TR/css-variables/)
- [Design Tokens Format Module](https://w3c.github.io/cg-reports/design-tokens/CG-FINAL-format-20251028/)
- [Типографическая шкала GOV.UK](https://design-system.service.gov.uk/styles/type-scale/)
- [Отступы USWDS](https://designsystem.digital.gov/design-tokens/spacing-units/)
