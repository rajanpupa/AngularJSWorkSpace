# Angular 4 | routing

* create two components `members` and `product`
```
ng generate component member
ng generate component product
```

* open `app.module.ts` and import module `@angular/router`
```
import { RouterModule } from '@angular/router'
```

* add the RouterModule in the imports and define the route and component inside the array

```
 imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'member',
        component : MembersComponent
      },
      {
        path: 'product',
        component: ProductComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

* add links to the defined path in the `app.component.html` file
```
<a routerLink="/member">Member</a>
<a routerLink="/product">Product</a>
```

* Define an area where the component will display when the above link is clicked in `app.component.html`

```
<router-outlet></router-outlet>
```

* `ng serve` and check