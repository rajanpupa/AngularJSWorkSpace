# AngularJS | Module

* A Module can have Config, in which we can define Routes

* Route may have two things. View and Controller

```
<html ng-app="moduleName">
```

* Module is an object container which could have
	** config -> Routes
	** Filter
	** Directive
	** Factory -> Service -> Provider -> Value
	** Controller
	
```
var demoApp = angular.module('dempApp',[]);
```

* The empty array is for dependency injection

```
var demoApp = angular.module('demoApp', [helperModule]);
```

### Creating controller from module
```
var demoApp = angular.module('demoApp',[]);

demoApp.controller('SimpleController', function($scope){
	$scope.customers=[{name: 'Rajan Upadhyay', city:'Marietta'}];
}
```

Reference:
https://youtu.be/i9MHigUZKEM  33:00



