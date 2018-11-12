# business-review

* suitable **only for development** (at the moment);
* it supports **JSX**, **ES6** and **class properties** through **babel** presets and plugins;
* it supports styling with **SCSS** and **Bootstrap**;
* it uses module "classNames" for conditionally joining classNames together.
* import images with webpack url-loader and file-loader;
* **Client-side routing** with **react-router-dom**.

## SCRIPTS
* run "yarn run dev" to execute the DevServer.

## ABOUT THE PROJECT STRUCTURE

### components
add here your global components.

### pages
* add here the components that make up your single pages or "scenes";
* nest inside a page the components that are used only in that page;

### styles
this folder is only for:
* global styles
* normalization/reset
* variable and mixins declarations;

### routers
it is where you can configure client-side routing.

### images
store here your image assets.

## Notes
* source-map settings not working;
