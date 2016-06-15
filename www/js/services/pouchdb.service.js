angular.module('appetiteApp')
	.service('pouchdb', ['$log', function ($log) {
		$log.info('pouchdb.service.js loaded');
		
		var mealDoc1 = {
	    	_id : '<unique meal id>',
	    	mealName : 'Bridi\'s Paninis',
	    	mealPrice : 0,
	    	owner : {
	    		_id : '',
	    		username : ''
	    	},
	    	numberOfPortions : 4
	    };
		
		
		var data = {
		    user : {},
		    meals : [mealDoc1],
		    settings : []
		};
		
		return {
		    data : data
		};
	}]);