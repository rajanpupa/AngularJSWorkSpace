# AngularJS | Filters

Filters Demo |

```
<ul>
	<li data-ng-repeat="cust in customers | orderBy:'name'">
		{{ cust.name | uppercase }}
	</li>
</ul>
```


Another Example snippet
```
<input type="text" data-ng-model="nameText" />
<ul>
	<li data-ng-repeat="cust in customers | filter:nameText | orderBy: 'name' ">
	{{cust.name}} - {{ cust.city }} </li>
</ul>
```

