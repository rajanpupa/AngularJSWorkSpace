# AngularJS | Directive

Directive are markers on a DOM element (such as attributes, element name, comment or css class) that tell AngularJS's HTML Compiler($compile) to attach a specific behavior to the DOM element (eg. via event listeners), or even to transform the DOM element and its children.

* built in directives : `ngBind`, `ngModel`, `ngClass`, `ngRepeat`

```
angular.module('docsSimpleDirective', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])
.directive('myCustomer', function() {
  return {
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});
```

* `index2.htm` has a directive and a filter

## Reference 
https://docs.angularjs.org/guide/directive
