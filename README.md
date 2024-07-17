# coding-task-2024 front-end for Vue.js & TypeScript

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Task TODO

Write a simple front-end application using Vue & TypeScript, with the following structure:

- On the index ("/")page, show a list of all Coding Bootcamps Europe (public) repositories. This information should be fetched using the GitHub REST API(the organization name is "coding-bootcamps-eu"). The information displayed in the list should include the repository names.

- The repositories in the list should be clickable and clicking on them should route to a repository details page ("/<repository-name>"). This detail page should show a list of the 20 latest commits in the given repository (fetched using the GitHub REST API). The information displayed in the list should include the commit messages.

As a bonus, you are welcome to display more information in the lists and add some styling to the views.
