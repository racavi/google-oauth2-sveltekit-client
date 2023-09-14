# google-oauth2-sveltekit-client
This repository provides a SvelteKit app integrating Google OAuth 2.0 Authorization code flow. 

## Zero-Day Vulnerabilities

This repo source files have been initially generated via [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte). 

Below code block is a snapshot from the output of the command at the time of project creation: 


```lang-bash
$ npm create svelte@latest app

create-svelte version 5.0.6

┌  Welcome to SvelteKit!
│
◇  Which Svelte app template?
│  Skeleton project
│
◇  Add type checking with TypeScript?
│  Yes, using JavaScript with JSDoc comments
│
◇  Select additional options (use arrow keys/space bar)
│  Add ESLint for code linting
│
└  Your project is ready!

✔ Type-checked JavaScript
  https://www.typescriptlang.org/tsconfig#checkJs

✔ ESLint
  https://github.com/sveltejs/eslint-plugin-svelte

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-add

Next steps:
  1: cd app
  2: npm install (or pnpm install, etc)
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat
```

## Prerequisites

This is a Node.js® application, as such, you will need to have Node.js installed in your machine to be able to run this application. It is recommended working with Node >= v18.17 or newer. 

## Getting started

### Install the dependencies

To be able to run this application, you will need to install its dependencies. To do so you will have to:

1. Navigate into application source directory

2. Install required Node node modules

The following commands will reproduce these steps within a terminal:

```lang-bash
cd app/
npm install
```

### Developing

After installing application dependencies you can start a development server issuing the following command:

```lang-bash
npm run dev
```

Or start the server and open the app in a new browser tab

```lang-bash
npm run dev -- --open
```

### Building

To create a production version of your app:

```lang-bash
npm run build
```

You can preview the production build with `npm run preview`.

To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
