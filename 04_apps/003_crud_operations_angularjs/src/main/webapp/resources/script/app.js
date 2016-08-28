var demoApp = angular.module('demoApp',[]);

demoApp.service('customerService', function($http){
	this.getCustomers = function(){
		// this is returning a promise
		return  $http.get('/getPersons');
	};
	this.deleteCustomer=function(cust){
		console.log(cust);
		return $http.delete('/getPersons/'+cust.id);
	}
});
		
demoApp.controller('SimpleController', function($log, $scope, customerService){
	var promise = customerService.getCustomers();
	var loadCustomers = function(){
		promise.then(function(payload){
			// payload contains the whole response object, not just the data
			console.log(payload);
			//assign the data to the scope variables
			$scope.customers = payload.data;
		},function(errorPayload){
			$log.error('failure loading customers', errorPayload);
		})
	};
			
	loadCustomers();
	$scope.greeting = " Hello World! This is a directive!!! doing the magic";
	
	$scope.del = function(cust){
		var spinner = document.getElementsByClassName("fa fa-spinner")[0];
		spinner.style.display='block';
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
});

demoApp.directive('greeting', function(){
	return {
		template: 'Greeting: {{ greeting }} '
	};
});