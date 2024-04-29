import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginAstro from 'eslint-plugin-astro'
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    rules:{}
  }
]
