<!doctype html>
<html ng-app="demoApp" lang="en">
  <head>
  	<script   src="https://code.jquery.com/jquery-3.1.0.min.js"   integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="   crossorigin="anonymous"></script>
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
		
		<div>
		<!-- Large modal shadow box-->
		<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".fade">Add Customer</button>
		
		<div id="addNewCustModel" class="modal fade" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title">Add new Customer</h4>
		      </div>
		      <div class="modal-body">
		        <p>Input customer information</p>
		        <form class="form-horizontal" id="addNewCustForm" ng-submit="add()">
				  <div class="form-group">
				    <label for="inputCustName" class="col-sm-2 control-label">Name</label>
				    <div class="col-sm-10">
				      <input type="text" class="form-control" id="inputCustName" placeholder="Name" ng-model="newCustomer.name">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="inputCustCity" class="col-sm-2 control-label">City</label>
				    <div class="col-sm-10">
				      <input type="password" class="form-control" id="inputCustCity" placeholder="city" ng-model="newCustomer.city">
				    </div>
				  </div>
				  <div class="form-group">
					    <div class="col-sm-offset-2 col-sm-10">
					      <button type="submit" class="btn btn-default">Submit</button>
					    </div>
				  </div>
				</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
		        <!-- <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button> -->
		      </div>
		    </div><!-- /.modal-content -->
		  </div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
		
		</div>
		
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