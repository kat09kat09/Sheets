//inject the myApp.dataFactory module into the myApp module
angular.module('myApp', ['ui.router', 'myApp.dataFactory', 'filters']) 

.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider){

    //default route is /home 
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url:'/home',
        templateUrl: 'app/views/home.html',
        controller: 'homeCtrl'
      })
  }
])
