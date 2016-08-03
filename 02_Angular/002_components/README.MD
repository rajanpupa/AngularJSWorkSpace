# Angular2 | Component

* Create a new file `app.components.ts`

* import the `Component` decorator from angular2 core
```
    import {Component} from 'angular2/core'
```

* annotate the class with the attributes selector and template
```
@Component({
    selector: 'courses',
    template: '<h2>Courses</h2>'
})
export class CourseComponent{
    
}
```