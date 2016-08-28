var demoApp = angular.module('demoApp',[]);

demoApp.service('customerService', function($http){
	this.getCustomers = function(){
		// this is returning a promise
		return  $http.get('/getPersons');
	};
	this.deleteCustomer=function(cust){
		console.log(cust);
		return $http.delete('/getPersons/'+cust.id);
	};
	this.addNewCustomer = function(cust){
		return $http.post('/getPersons', cust);
	}
});
		
demoApp.controller('SimpleController', function($log, $scope, customerService){
	
	var loadCustomers = function(){
		var promise = customerService.getCustomers();
		promise.then(function(payload){
			// payload contains the whole response object, not just the data
			console.log(payload.data.length);
			//assign the data to the scope variables
			$scope.customers = payload.data;
		},function(errorPayload){
			$log.error('failure loading customers', errorPayload);
		})
	};
			
	loadCustomers();
	$scope.greeting = " Hello World! This is a directive!!! doing the magic";
	
	$scope.del = function(cust){
		//var spinner = document.getElementsByClassName("fa fa-spinner")[0];
		//spinner.style.display='block';
		customerService.deleteCustomer(cust)
			.then(function(payload){
				// if the webservice successfully returns, then delete it from model
				var index = $scope.customers.indexOf(cust);
				$scope.customers.splice(index, 1); 
			});
	};
	$scope.edit = function(cust){
		// first show a form with the customer information populated
		// if the user clicks save(not cancel), then trigger another method to update and refresh
		console.log("edit button clicked");
	};
	$scope.newCustomer = {};
	$scope.add = function(){
		var newCustomer = $scope.newCustomer;
		$log.info(newCustomer);
		if(newCustomer.name && newCustomer.city){
			customerService.addNewCustomer(newCustomer)
			.then(function(payload){
				console.log(payload.data);
				loadCustomers();
				$scope.newCustomer = {};
				$('#addNewCustModel').modal('toggle');
				$scope.$apply();
			})
			
		}
	};
});

demoApp.directive('greeting', function(){
	return {
		template: 'Greeting: {{ greeting }} '
	};
});