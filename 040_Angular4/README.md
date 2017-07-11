# Getting started with Angular 4 | Angular

* Angular 4 is very much same as Angular 2.
* It has a bunch of performance improvements and fast loadings


### Installation

1. You need to have Nodejs version 6.10 or higher and npm version 3.10 or higher

2. Install the cli
`npm install -g @angular/cli`

3. Verify if angular cli is installed
`ng -v`

4. Create Project from cli
`ng new first  `

5. To start the project

```
ng serve

// 4200 is the default port
```

### Files

Inside the src->app folder, we have 5 files created 
1. app.component.css      (style of the component)
2. app.component.html     ( template of the component)
3. app.component.spec.ts  ( Unit test file for the component)
4. app.component.ts       ( component )
5. app.module.ts

The first four combined, form a component.

The 5th file is a module where all other dependencies and components are imported to form an application.

### Creating new component

``` ng generate component my-component```

* this will create a folder `my-component` in the app directory

* `app-component` is the parent, and all other components that we create will be the child component

*   We can fetch the date of our child component and show it within the template of our parent component.






### References

1. https://cli.angular.io/
2. https://youtu.be/CUCJywIZrIo?list=PLz5rnvLVJX5VQZdTz4MTE52aKto-MoPwB

