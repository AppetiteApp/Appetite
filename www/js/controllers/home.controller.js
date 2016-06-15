angular.module('appetiteApp')
    .controller('homeCtrl', ['$log', '$scope', 'pouchdb', function ($log, $scope, pouchdb) {
        $log.info('homeCtrl.controller.js loaded');
        
        $scope.testVal = 'Hey2';
        
        $scope.mealsList = pouchdb.data.meals;
        
    }]);