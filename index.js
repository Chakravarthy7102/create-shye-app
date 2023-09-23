import {
  intro,
  outro,
  confirm,
  select,
  spinner,
  isCancel,
  cancel,
  text,
} from '@clack/prompts';
import { setTimeout as sleep } from 'node:timers/promises';

async function main() {

  const projectType = await select({
    message: 'Pick a project type.',
    options: [
      { value: 'ts', label: 'TypeScript' },
      { value: 'js', label: 'JavaScript' },
      { value: 'coffee', label: 'CoffeeScript', hint: 'oh no' },
    ],
  });

  if (isCancel(projectType)) {
    cancel('Operation cancelled');
    return process.exit(0);
  }

  const s = spinner();
  s.start('Installing via npm');

  await sleep(3000);

  s.stop('Installed via npm');

  outro("You're all set!");

  await sleep(1000);
}

main().catch(console.error);
