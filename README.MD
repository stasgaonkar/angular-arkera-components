# angular-arkera-components

This is a library of components that can be used to develop the Arkera Client Application.

## Installation

This library may not be published to npm and hence the usual `npm install ...` will not be supported. Currently you can use this library during development as  explained in next section.

## Consuming the library during development

To consume the library during development, follow the steps below:

1. Clone the repository from github. 
  
2. Navigate to the directory: `angular-arkera-components`
  
  ```
  $ cd angular-arkera-components
  ```
  
3. Install the necessary libraries and compile the library files:

  ```
  $ npm install
  $ npm run build
  ```
  
4. From the `angular-arkera-components/dist` directory, create a symlink in the global node_modules directory to the `dist` directory of your library:

  ```
  $ cd dist
  $ npm link
  ```
  
5. You can test the components of the library in the sample application that is packed in this project itself. The sample application is available in the  `angular-arkera-components/examples` folder. Navigate to the this folder:

  ```
  $ cd ../examples  
  ```
  
6. From the `examples` directory, link the global `angular-arkera-components` directory to node_modules of the `examples` directory:
  
  ```
  $ npm link angular-arkera-components
  ```
  
7. The main module of the library `ArkeraComponentsModule` has already imported  in `app.module.0.ts`. Similarly the `feed.component` has already been used in  `app.component.0.html`. 

8. To run the sample application, install the necessary libraries and start the server as follows:

  ```
  $ npm install
  $ npm start
  ```
  
9. When you make a change to the library, recompile the library files again from the `angular-arkera-components` directory:
  ```
  $ npm run build
  ```
    
10. If you want to automatically recompile the library files when a file in `src` changes, run
  ```
  $ npm run build:watch
  ```
  
11. If you are using an Angular CLI application to consume the library, make sure to set up a [path mapping](https://github.com/angular/angular-cli/wiki/stories-linked-library#use-typesscript-path-mapping-for-peer-dependencies) in `/src/tsconfig.app.json` of your consuming application (not your library):
  ```typescript
  {
    "compilerOptions": {
      // ...
      // Note: these paths are relative to `baseUrl` path.
      "paths": {
        "@angular/*": [
          "../node_modules/@angular/*"
        ]
      }
    }
  }
  ```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

[Arkera](mailto:sushil@arkera.ai)
