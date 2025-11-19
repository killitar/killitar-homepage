# Killitar-homepage

A personal website [mirolinx](https://mirolinx-homepage.vercel.app/)

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
| `bun install`              | Installs dependencies                            |
| `bunx run dev`             | Starts local dev server at `localhost:4321`      |
| `bunx run build`           | Build your production site to `./dist/`          |
| `bunx run preview`         | Preview your build locally, before deploying     |
| `bunx run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bunx run astro -- --help` | Get help using the Astro CLI                     |
