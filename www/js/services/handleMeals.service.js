angular.module('appetiteApp')
	.service('handleMeals', ['$log', 'pouchdb', function ($log, pouchdb) {
		
		$log.info('handleMeals.service.js loaded');
		
		function queryMeals () {
			
		}
		
		function saveMeal() {
			
		}
		
		return {
		    saveMeal : saveMeal,
		    queryMeals : queryMeals
		};
	}]);