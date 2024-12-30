# Ethereum Cat Herder Website

[![gitpoap badge](https://public-api.gitpoap.io/v1/repo/ethereum-cat-herders/ech-website-v2/badge)](https://www.gitpoap.io/gh/ethereum-cat-herders/ech-website-v2)

## Purpose

This repository manages the content of the official [Ethereum Cat Herders](https://www.ethcatherders.com/) website.

## Tech Stack
This app is built using:
- [Next JS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- TypeScript

## Running locally

### Prerequisites
You may need the additional prisma library to build locally

```
npm i -g prisma
```

Install the dependencies
```
npm install
```

### Run your local server
```
npm run dev
```

## How to Contribute

To contribute to this project, please follow the steps below:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Create a pull request to the `develop` branch

Once your PR is merged to the `develop` branch, it will be deployed to the staging website. 

To deploy changes to the production website, you need to create a PR from the `develop` branch to the `main` branch. A reviewer must approve the PR before it can be merged.

## Questions
If you're a new contributor with questions, contact the team in our [Discord](https://discord.gg/gHy6pS5mGy) server.
