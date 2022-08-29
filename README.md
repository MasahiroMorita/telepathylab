# Getting Started
This project is a response to Telepathy Labs' technical test.

## Demonstration
You can find [a DEMO at this link](https://masahiromorita.github.io/telepathylab/) on Github Pages.

## Instration
You can install and execute a demo on your environment by:

```
$ git clone git@github.com:MasahiroMorita/telepathylab.git
$ cd telepathylab
$ npm install
$ npm start
```

Then, open [http://lcoalhost:3000](http://localhost:3000) to view it in your browser.

## Unit testing
You can run unit testing.
To launch the test runner in the interactive watch mode, use the following command line:
```
$ npm test
```

## Automated deployment
This project has automated deployment with Github Actions.
When you make any changes on the `master` branch, a workflow is invoked and it updates the DEMO page on Github Pages.
