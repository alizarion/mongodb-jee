/**
 * Created by selim@openlinux.fr on 21/01/14.
 */

var linker = angular.module('linker',['ngResource','ngRoute','vcRecaptcha']);

linker.config(function($routeProvider){
    $routeProvider.when('/',
        {
            controller: 'HomeCtrl',
            templateUrl: 'view/defaultView.html'
        })
        .otherwise({redirectTo : '/'})
}) ;
linker.factory('simpleFactory', function(){
     var factory = [{text: 'Learn AngularJS',done:false},
         {text:'faire une pplication',done:false}];
    return factory;
})
