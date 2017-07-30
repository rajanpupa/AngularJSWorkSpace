# Angular 4 | data binding

* Add additional properties in the `app.component.ts` file

```
export class AppComponent {
  title = 'app';
  obj = {
    id : "1",
    name: "rajan"
  };

  arr = ["abc", "def", "ghi"]
}

```

* Print the component in the `app.component.html` file
```
{{obj.name}}
  <br/>
  <ul>
      <li *ngFor = "let i of arr">{{i}}</li>
  </ul>
```

