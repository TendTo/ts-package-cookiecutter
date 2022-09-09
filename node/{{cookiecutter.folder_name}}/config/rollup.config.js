import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/{{cookiecutter.package_entrypoint}}.ts',
  output: [
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
