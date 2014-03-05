/**
 * Created by selim.bensenouci on 04/03/14.
 */
linker.config(function($routeProvider){
    $routeProvider.when('/register',
        {
            controller: 'RegisterCtrl',
            templateUrl: 'web/partials/view/register.html'
        }).when('/index',
        {
            controller: 'HomeCtrl',
            templateUrl: 'web/partials/view/home.html'
        })
        .otherwise({
            redirectTo : '/index'})
}) ;