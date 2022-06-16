# Blog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Generate Component Eg.

`ng generate component organism/test-alpha -m organism`


# Roadmap

## Route structure

index       -> /

categories  -> /category/${slug-name}
            -> /category/${slug-name}?page=${page}

post-detail -> /post/${slug-name}

author      -> /author/${author-name}

## Common page setup

- Updating meta tags with related data
- Updating page title with related data
- Updating meta robot tags with related data
- Updating canonical link tag with related data


## Setup GraphQL with Codegen

To generate services after editing or creating the graphql files under `src/app/service` just hit `npm run codegen`

## Strapi Data Models

We have two main variables to define contents
 - Locale: To define language
 - Channel: To define the source of the contents. Seperate different website contents.

Main models;

- Locale
- Post
- Category
- Author



