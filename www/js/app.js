// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('appetiteApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('accounthistory', {
      url: '/accounthistory',
      templateUrl: '/www/views/accounthistory.view.html',
      controller: 'accounthistoryCtrl',
    })
    .state('dish', {
      url: '/dish',
      templateUrl: '/www/views/dish.view.html',
      controller: 'dishCtrl',
    })
    .state('login', {
      url: '/login',
      templateUrl: '/www/views/login.view.html',
      controller: 'loginCtrl',
    })
    .state('register', {
      url: '/register',
      templateUrl: '/www/views/register.view.html',
      controller: 'registerCtrl',
    })
    .state('settings', {
      url: '/settings',
      templateUrl: '/www/views/settings.view.html',
      controller: 'settingsCtrl',
    })
    .state('terms', {
      url: '/terms',
      templateUrl: '/www/views/terms.view.html',
      controller: 'termsCtrl',
    })
    .state('crnttransactions', {
      url: '/crnttransactions',
      templateUrl: '/www/views/crnttransactions.view.html',
      controller: 'crnttransactionsCtrl',
    })
    .state('home', {
      url: '/home',
      templateUrl: '/www/views/home.view.html',
      controller: 'homeCtrl',
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/www/views/profile.view.html',
      controller: 'profileCtrl',
    })
    .state('sellmeal', {
      url: '/sellmeal',
      templateUrl: '/www/views/sellmeal.view.html',
      controller: 'sellmealCtrl',
    })
    .state('signin', {
      url: '/signin',
      templateUrl: '/www/views/signin.view.html',
      controller: 'signinCtrl',
    })
  $urlRouterProvider.otherwise('/login');
});