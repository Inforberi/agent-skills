import { lstatSync, readFileSync, writeFileSync } from 'node:fs';

const start = '<!-- Inforberi/agent-skills:start -->';
const end = '<!-- Inforberi/agent-skills:end -->';
const rules = readFileSync(new URL('../references/project-rules.md', import.meta.url), 'utf8').trimEnd();

function readProjectFile(path) {
  const info = lstatSync(path, { throwIfNoEntry: false });
  if (!info) return '';
  if (!info.isFile()) throw new Error(`${path}: expected a regular file`);
  return readFileSync(path, 'utf8');
}

function append(text, block, newline) {
  const separator = text ? (text.endsWith(newline) ? newline : newline.repeat(2)) : '';
  return text + separator + block + newline;
}

function updateRules(text) {
  const newline = text.includes('\r\n') ? '\r\n' : '\n';
  const block = [start, rules.replaceAll('\n', newline), end].join(newline);
  const starts = [...text.matchAll(/^<!-- Inforberi\/agent-skills:start -->\r?$/gm)];
  const ends = [...text.matchAll(/^<!-- Inforberi\/agent-skills:end -->\r?$/gm)];
  if (!starts.length && !ends.length) return append(text, block, newline);
  if (starts.length !== 1 || ends.length !== 1 || starts[0].index >= ends[0].index) {
    throw new Error('AGENTS.md: invalid agent-skills block markers');
  }
  return text.slice(0, starts[0].index) + block + text.slice(ends[0].index + end.length);
}

try {
  const args = process.argv.slice(2);
  if (args.length && (args.length !== 1 || args[0] !== '--claude-import')) {
    throw new Error('Usage: node install-project-rules.mjs [--claude-import] (from the project root)');
  }
  const agents = readProjectFile('AGENTS.md');
  const updatedAgents = updateRules(agents);
  const claude = args.length ? readProjectFile('CLAUDE.md') : '';
  const updatedClaude = /^@(?:\.\/)?AGENTS\.md[ \t]*\r?$/m.test(claude)
    ? claude
    : append(claude, '@AGENTS.md', claude.includes('\r\n') ? '\r\n' : '\n');

  if (agents !== updatedAgents) writeFileSync('AGENTS.md', updatedAgents);
  if (readProjectFile('AGENTS.md') !== updatedAgents) throw new Error('AGENTS.md verification failed');
  if (args.length) {
    if (claude !== updatedClaude) writeFileSync('CLAUDE.md', updatedClaude);
    if (readProjectFile('CLAUDE.md') !== updatedClaude) throw new Error('CLAUDE.md verification failed');
  }
  console.log(args.length ? 'Verified AGENTS.md and CLAUDE.md import' : 'Verified AGENTS.md');
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
