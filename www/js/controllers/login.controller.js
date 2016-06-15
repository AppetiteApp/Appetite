angular.module('appetiteApp')
    .controller('loginCtrl', ['$log', '$scope', 'pouchdb', 'handleMeals', function ($log, $scope, pouchdb, handleMeals) {
        $log.info('loginCtrl.controller.js loaded.');
        
        $scope.mealsList = pouchdb.data.meals;
        
        
    }]);