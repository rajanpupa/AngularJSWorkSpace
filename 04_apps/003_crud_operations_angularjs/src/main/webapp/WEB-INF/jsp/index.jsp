<!doctype html>
<html ng-app="demoApp" lang="en">
  <head>
    <!--<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>-->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0/angular.min.js"></script>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	
  </head>
  <body>
  	<div class='container'>
    <div data-ng-controller="SimpleController">
		<div greeting ></div>
		Name: <br/>
		<input type="text" data-ng-model="name" />{{ name }}
		<br/>
		<div>
		<span class="fa fa-spinner" style="display:none">Loading</span>
		
		<table class="table table-bordered table-condensed">
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Address</th>
					<th>Operations</th>
				</tr>
			</thead>
			<tbody>
				<tr data-ng-repeat="cust in customers | filter:name | orderBy:'city' ">
					<td>{{ $index + 1 }}</td>
					<td>{{ cust.name | uppercase}} </td>
					<td> {{cust.city | lowercase}}</td>
					<td>
						<span class="glyphicon glyphicon-trash" ng-click="del(cust)"></span>
						<span class="glyphicon glyphicon-edit" ng-click="edit(cust)"></span>
					</td>
				</tr>
			</tbody>
		</table>
		</div>
    </div><!-- simple controller  -->
    </div>
	<script src="/resources/script/app.js"></script>
  </body>
</html>