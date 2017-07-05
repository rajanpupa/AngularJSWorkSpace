# AngularJS | Factories

Factory or Service or Providers or value providers are all service layer components.

They are singleton and provide service to other Service layer components or controllers.

* Allow us to encapsulate common functionality
* In factory, you create an object and return the object.
* In Service, you have special `this` keyword which is used to define functions.
* In Provider, you have a standard `$get` function, which can be used to get the object that returns data.
* A value is used to get a simple config value.

```
var demoApp = angular.module('demoApp',[])
	.factory('simpleFactory', function(){
		var factory = {};
		var customers = [...];// async ajax call
		factory.getCustomers = function(){
			return customers;
		};
		return factory;
	})
	.controller('SimpleController', function($scope, simpleFactory){
		$scope.customers = simpleFactory.getCustomers();
	});
	
```

Reference:
https://youtu.be/i9MHigUZKEM  43:00



