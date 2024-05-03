# Killitar-homepage

A personal website [Killitar](https://killitar-homepage.vercel.app/)

## 📦 Stack

- [Astro](https://astro.build/) - The web framework for content-driven websites

- [TypeScript](https://www.typescriptlang.org/): A typed JavaScript

- [Vue](https://vuejs.org/): A performant and versatile JavaScript framework for building web user interfaces

- [Vite](https://vitejs.dev/): A fast build tool

- [TailwindCSS](https://tailwindcss.com/): A CSS framework for building UI

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
