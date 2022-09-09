import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'src/{{cookiecutter.package_entrypoint}}.ts',
  output: [
    {
      format: 'iife',
      file: 'public/dist/bundle/{{cookiecutter.package_name}}.js',
      name: '{{cookiecutter.package_export}}',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      declaration: false,
      module: 'esnext',
      declarationMap: false,
      declarationDir: undefined,
    }),
    sourcemaps(),
  ],
};
