

# Upgrading to Angular 4
Congratulations! You are well on your way to having this project updated to use Angular 4. Angular IDE helps get you a lot of the way there, though check out the steps below for other notes that may be important for you to follow.

## Tasks Completed
Tasks below have been performed during the upgrade. In some cases, tasks may have been skipped if already ready for Angular 4.
1. Update package.json to use Angular 4 modules
2. Download dependences of packages via npm
3. Use @angular/cli instead of the earlier angular-cli
4. Rename angular-cli.json to .angular-cli.json
5. Add $schema property to .angular-cli.json
6. Update polyfills, envronments & linting configuraton
7. Update tslint.json with new rules
8. Update lifecycle methods such as OnInit to be implements
9. Change ``<template>`` to ``<ng-template>`` in template files

## Tasks Remaining
Tasks below can be completed though not all are required. More details can be found online at:
https://github.com/angular/angular-cli/wiki/stories-1.0-update

### a. Update Generator Defaults in .angular-cli.json
You can now list the flags as they appear on the generator command:

	"defaults": {
	  "styleExt": "css",
	  "component": {
	    "inlineTemplate": false,
	    "spec": true
	  }
	}

See more here https://github.com/angular/angular-cli/wiki/generate-component

### b. Switch to one tsconfig.json per application
Optionally, split the tsconfigs into multiple files:

* src/tsconfig.app.json: configuration for the Angular app.
* src/tsconfig.spec.json: configuration for the unit tests. Defaults to the Angular app config.
* e2e/tsconfig.e2e.json: configuration for the e2e tests.

There is an additional root-level tsconfig.json that is used for editor integration.

See more here https://github.com/angular/angular-cli/wiki/stories-1.0-update#one-tsconfig-per-app

### c. Update karma.conf.js
This files needs to get updated to use the new Angular CLI package name (@angular/cli) plus some
minor changes on the reporters config.

See more here https://github.com/angular/angular-cli/wiki/stories-1.0-update#karmaconfjs

### d. Update protractor.conf.js
To make Protractor to play well with the changes, protractor.conf.js needs to get updated to use
the new tsconfigs described in _Switch to one tsconfig.json per application_.

See more here https://github.com/angular/angular-cli/wiki/stories-1.0-update#protractorconfjs
...

