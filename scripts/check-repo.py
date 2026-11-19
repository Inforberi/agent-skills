import re
from pathlib import Path


root = Path(__file__).resolve().parents[1]
skills = root / "skills"
errors = []

markdown = list(root.glob("*.md"))
for folder in ("docs", "evals", "examples", "skills"):
    markdown.extend((root / folder).rglob("*.md"))

for path in sorted(markdown):
    for link in re.findall(r"\]\(([^\s)]+)\)", path.read_text(encoding="utf-8")):
        target = link.split("#", 1)[0]
        if target and not re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*:", target):
            if not (path.parent / target).exists():
                errors.append(f"{path.relative_to(root)}: missing link target {link}")

external = set()
catalog = root / "docs/catalog.md"
integrations = catalog.read_text(encoding="utf-8").split("## Дизайн и проверка\n", 1)[1]
for line in integrations.split("\n## ", 1)[0].splitlines():
    if line.startswith("| `"):
        external.update(re.findall(r"`([a-z0-9-]+)`", line.split("|")[1]))

for name in ("setup-agent-skills", "deliver-feature"):
    path = skills / name / "SKILL.md"
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line.lstrip().startswith("|"):
            continue
        for profile in re.findall(r"`([a-z0-9-]+)`", line):
            if name == "deliver-feature" and profile in external:
                continue
            if not (skills / profile / "SKILL.md").is_file():
                errors.append(f"{path.relative_to(root)}: unknown profile {profile}")

if errors:
    raise SystemExit("\n".join(errors))

print("Markdown links and workflow profiles verified")
