# AngularJS | $scope

* Glue(ViewModel) between the view and the controllers

* controllers need not know about the view

```
<div class="container" data-ng-controller="SimpleController">
	<h3>Adding a Simple Controller</h3>
	<ul>
		<li data-ng-repeat="cust in customers">
			{{cust.name}} - {{ cust.city}}
		</li>
	</ul>
</div>
<script>
	function SimpleController($scope){
		$scope.customers = [
			{name: 'Dave Jones', city: 'Phoenix'},
			{name: 'Jamie Riley', city: 'Atlanta'},
			{name: 'Heedy Wahlin', city: 'Chandler'},
			{name: 'Thomas Winter', city: 'Seattle'}
		];
	}
<script>
```

##### Note

* Starting AngularJS 1.3, stand-alone functions like the one shown above, cannot be used on their own.