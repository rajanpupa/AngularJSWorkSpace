# AngularJS | Directive

Directive are markers on a DOM element (such as attributes, element name, comment or css class) that tell AngularJS's HTML Compiler($compile) to attach a specific behavior to the DOM element (eg. via event listeners), or even to transform the DOM element and its children.

* built in directives : `ngBind`, `ngModel`, `ngClass`, `ngRepeat`

* You can dependency inject any service inside a directive

* Returns an object

* case-sensitive camelCase (in html `ng-model` but in js `ngModel`)
  
 # attributes of directive object
  
  * `template`
  
  * `template-url`
  
  * `scope` 
  
    * used to differenciate directive's inner scope with the outer scope
  
  ```
  .controller('Controller', ['$scope', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
  }])
  
  .directive('myCustomer', function() {
  return {
    restrict: 'E',
    scope: {
      customerInfo: '=info'
    },
    templateUrl: 'my-customer-iso.html'
  };
  
  // in html
  <div ng-controller="Controller">
    <my-customer info="naomi"></my-customer>
    <hr>
    <my-customer info="igor"></my-customer>
  </div>

  // in my-customer-iso.html template-url
  Name: {{customerInfo.name}} Address: {{customerInfo.address}}
  ```
 
  * `restrict`
    
    * `E`  only matches Element name
    
    * `A` only matches Attribute name
    
    * `C` only matches class name
    
    * `M` only matches comment 
    
    * These restrictions can all be combined as well `AEC`
    

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
