# AngularJS | Routes

```
var demoApp = angular.module('demoApp',[]);

// $routeProvider is injected dynamically
demoApp.config(function($routeProvider){
	$routeProvider
		.when('/',
			{
				controller: 'SimpleController',
				templateUrl: 'View1.html'
			})
		.when('/partial2',
			{
				controller: 'SimpleController',
				templateUrl: 'View2.html'
			})
		.otherwise({redirectTo: '/'});
});
```

* Glues a view to a controller.

Reference:
https://youtu.be/i9MHigUZKEM  43:00



