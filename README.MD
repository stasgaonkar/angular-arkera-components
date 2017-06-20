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
  
3. Compile the library files:
  ```
  $ npm run build
  ```
  
4. From the `angular-arkera-components/dist` directory, create a symlink in the global node_modules directory to the `dist` directory of your library:
  ```
  $ cd dist
  $ npm link
  ```
  
5. Create a new Angular app. Or you may choose to use the app in the `angular-arkera-components/examples` folder. Navigate to the this folder:
  ```
  $ cd examples  
  ```
  
6. From the `examples` directory, link the global `angular-arkera-components` directory to node_modules of the `examples` directory:
  ```
  $ npm link angular-arkera-components
  ```
  
8. Import `ArkeraComponentsModule` in your Angular application. This has already been done for the sample application in `examples` directory.

  ```typescript
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  
  import { AppComponent } from './app.component';
  
  // Import your library
  import { ArkeraComponentsModule } from 'angular-arkera-components';
  
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      
      // Specify your library as an import
      ArkeraComponentsModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```

9. Once the library is imported, you can use its components, directives and pipes in your Angular application templates:

  ```xml
  <!-- app.component.html -->
  <h1>{{title}}</h1>
  <sample-component></sample-component>
  <ak-feed></ak-feed>
  ```
  
  and if you need to access a service from your shared library, you can inject it using Dependency Injection:
  
  ```typescript
  import { Component } from '@angular/core';
  
  // Import the shared service
  import { SampleService } from 'angular-arkera-components';
  
  @Component({
    template: 'Injecting a service from the shared library'
  })
  export class HomeComponent {
  
    // Inject the service using Angular DI 
    constructor(private sampleService: SampleService){
    
    }
  
  }
  ```
  
10. When you make a change to the library, recompile the library files again from the `angular-arkera-components` directory:
  ```
  $ npm run build
  ```
    
11. If you want to automatically recompile the library files when a file in `src` changes, run
  ```
  $ npm run build:watch
  ```
  
12. If you are using an Angular CLI application to consume the library, make sure to set up a [path mapping](https://github.com/angular/angular-cli/wiki/stories-linked-library#use-typesscript-path-mapping-for-peer-dependencies) in `/src/tsconfig.app.json` of your consuming application (not your library):
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

MIT © [Arkera](mailto:sushil@arkera.ai)
