# Bosi Bit Personal
A library with myu personal bit components

## Starting with ui-core-components

If you out of time and just want to start coding fast, feel free to run `sh ./TLDR.sh` on your terminal. This script will run all of the commands bellow on the right order.

----

Bit has its' own cli tool and package version controller. So, to start working on any bit repository, first you'll need to install those. First you'll need to install BVM:

```bash
npm i -g @teambit/bvm
```

With it you can install the bit cli:

```bash
bvm install
```

Once you have bit, go to the repository you are working on and:

```bash
bit install
```

This will not only install all bit packages, but will also install anything that is on package.json. After that, we'll need to set up the commit scripts with rusk by running:

```bash
yarn prepare
```

The next step will be to compile what we have on bit:

```bash
bit compile
```

This will compile any component/code that you wrote in a way that bit can use. At last, to start the bit server, just:

```bash
bit start
```

This will start a server with all bit components that we already have.

## Adding new components

All components on Bit have a namespace and a containing folder with a specs.ts or specs.tsx, a composition.tsx and a docs.mdx file. First you'll create a component inside the right folder based on its' type of use. On that, you populate it with the correct ts or tsx file for the functionality. After that, you'll create any necessary test adding it to the specs.ts or specs.tsx file. 

The next step will be adding some examples to the composition.tsx file. This file accepts any valid React code. If you are creating a React component, just show some examples of use in there. If you are creating some helpers, be creative and show a nice way/place where your code could be used.

The last file is the docs.mdx. Mdx is a type of file that mixes markdown with React code. On it you can import React components and use the inside a code tag. However, Bit added an extra to that functionality. If you add live next to the \`\`\`js code, the user will be able to change the code and see the results out live.
