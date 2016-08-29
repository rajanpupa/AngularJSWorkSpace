var demoApp = angular.module('demoApp',[]);

demoApp.service('customerService', function($http){
	
	var url = '/getPersons';
	
	this.getCustomers = function(){
		// this is returning a promise
		return  $http.get(url);
	};
	this.deleteCustomer=function(cust){
		console.log(cust);
		return $http.delete(url + '/' + cust.id);
	};
	this.addNewCustomer = function(cust){
		return $http.post(url, cust);
	};
	
	this.editCustomer = function(cust){
		return $http.put(url, cust);
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
		customerService.deleteCustomer(cust)
			.then(function(payload){
				// if the webservice successfully returns, then delete it from model
				var index = $scope.customers.indexOf(cust);
				$scope.customers.splice(index, 1); 
			});
	};
	
	$scope.newCustomer = {};
	$scope.model = {};
	$scope.addClicked = function(){
		$scope.model = {
				title: 'Add new Customer'
		};
		$scope.newCustomer = {};
		$('#addNewCustModel').modal('toggle');
	}
	$scope.formSubmit = function(){
		var newCustomer = $scope.newCustomer;
		$log.info(newCustomer);
		if(newCustomer.id){
			//edit the existing customer
			customerService.editCustomer(newCustomer)
			.then(function(payload){
				loadCustomers();
				$scope.newCustomer = {};
				$('#addNewCustModel').modal('toggle');
				$scope.$apply();
			});
		}else{
			if(newCustomer.name && newCustomer.city){
				customerService.addNewCustomer(newCustomer)
				.then(function(payload){
					console.log(payload.data);
					loadCustomers();
					$scope.newCustomer = {};
					$('#addNewCustModel').modal('toggle');
					$scope.$apply();
				});
			}
		}
		
		
	};
	
	$scope.editClick = function(cust){
		$scope.model.title= 'Edit Customer';
		
		$scope.newCustomer.id=cust.id;
		$scope.newCustomer.name = cust.name;
		$scope.newCustomer.city = cust.city;
		
		$('#addNewCustModel').modal('toggle');
	}
});//controller

demoApp.directive('greeting', function(){
	return {
		template: 'Greeting: {{ greeting }} '
	};
});