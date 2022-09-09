import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/{{cookiecutter.package_entrypoint}}.ts',
  output: [
    {
      format: 'iife',
      file: 'dist/bundle/{{cookiecutter.package_name}}.min.js',
      name: '{{cookiecutter.package_export}}',
      plugins: [terser()],
    },
    {
      format: 'iife',
      file: 'dist/bundle/{{cookiecutter.package_name}}.js',
      name: '{{cookiecutter.package_export}}',
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      preserveModules: true,
    },
    {
      dir: 'lib/cjs',
      format: 'cjs',
      preserveModules: true,
    },
    {
      dir: 'lib/esm',
      format: 'esm',
      preserveModules: true,
    },
  ],
  plugins: [
    typescript({
      declaration: false,
      module: 'esnext',
      declarationMap: false,
      declarationDir: undefined,
    }),
  ],
};
