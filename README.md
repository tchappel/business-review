# business-review
a take home project in React, strated with my-react-boilerplate-with-bootstrap.
* suitable **only for development** (at the moment);
* it supports **JSX**, **ES6** and **class properties** through **babel** presets and plugins;
* it supports styling with **SCSS** and **Bootstrap**;
* it uses module "classNames" for conditionally joining classNames together.
* import images with webpack url-loader and file-loader;
* **Client-side routing** with **react-router-dom**.

## SCRIPTS
* run "yarn run dev" to execute the DevServer.

## ABOUT THE PROJECT STRUCTURE

### pages and components
* Inside page folder there are the pages that make up the application;
* currently there is a single page named "App";
* components are nested inside pages folder;
* styles for each component are located inside the component folder.

### styles
this folder is only for:
* global styles
* normalization/reset
* variable and mixins declarations;

### routers
it is where I configure client-side routing.

### images
stores image assets.

## Notes
* source-map settings not working;
