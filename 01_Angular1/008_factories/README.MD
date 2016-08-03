# AngularJS | Factories

```
var demoApp = angular.module('demoApp',[])
	.factory('simpleFactory', function(){
		var factory = {};
		var customers = [...];// async ajax call
		factory.getCustomers = function(){
			return customers;
		};
		return customers;
	})
	.controller('SimpleController', function($scope, simpleFactory){
		$scope.customers = simpleFactory.getCustomers();
	});
	
```

Reference:
https://youtu.be/i9MHigUZKEM  43:00



