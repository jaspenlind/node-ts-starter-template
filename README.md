# node-ts-starter-template

starter template for nodejs development with Typescript, eslint and more

[![Build Status](https://travis-ci.com/jaspenlind/node-ts-starter-template.svg?branch=master)](https://travis-ci.com/jaspenlind/node-ts-starter-template)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d53c318f91a54f49822d30d9974c1003)](https://www.codacy.com/manual/jaspenlind/node-ts-starter-template?utm_source=github.com&utm_medium=referral&utm_content=jaspenlind/node-ts-starter-template&utm_campaign=Badge_Grade)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Coverage Status](https://coveralls.io/repos/jaspenlind/node-ts-starter-template/badge.svg?branch=master)](https://coveralls.io/r/jaspenlind/node-ts-starter-template?branch=master)s
[![GitHub Pages](https://img.shields.io/badge/api-docs-blue)](https://jaspenlind.github.io/node-ts-starter-template/)
![GitHub](https://img.shields.io/github/license/jaspenlind/node-ts-starter-template)
[![npm](https://img.shields.io/npm/v/node-ts-starter-template)](https://www.npmjs.com/package/node-ts-starter-template)

Get up to speed with nodejs development using this template with useful libraries and config:

- typescript
- ts-jest
- eslint
- airbnb
- commitlint
- husky
- prettier
- coveralls
- vscode
- travis
- typedoc
- github pages

## Installation

1. Clone from [here](https://github.com/jaspenlind/node-ts-starter-template/generate)
2. Initialze your new repository: `npm run setup`

## Test

```shell
npn run test
```

## Enable Github Pages docs site

This template supports generating api documentation using TypeDoc.

It you want to host this on a Github pages site you need to create a specific branch for that:

- git checkout --orphan gh-pages
- git rm -rf .
- git commit --allow-empty -m "Init empty branch"
- git push origin gh-pages

More info can be found here: <https://medium.com/linagora-engineering/deploying-your-js-app-to-github-pages-the-easy-way-or-not-1ef8c48424b7>

Also, if you want to deploy the documentation with `Travis` change this in the .travis.yml file:

- uncomment the `npm run docs` command
- uncomment the `pages` provider task

## Give Travis permissions to deploy to Github

- Create a [new personal access token](https://github.com/settings/tokens/new) for Travis
- Give the token `public_repo` access and give it a descritive name (Travis CI)
- Copy the generated token looking similar to this: f89d4f5afe32426d48b1aaa8b7883be445703578
- In Travis, create a new environment variable named `GITHUB_DEPLOYMENT_KEY` and paste the generated token as the value
