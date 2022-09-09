import type { Test } from '../src/{{cookiecutter.package_entrypoint}}';

declare global {
  const {{cookiecutter.package_export}}: {
    // Import and add all the exports from the {{cookiecutter.package_entrypoint}} file
    Test: typeof Test;
  };
}
