/**
 * Created by selim.bensenouci on 21/01/14.
 */

'usse strict';
//définition d'une collection de controlleurs
var controllers = {};


//Register view controllers
controllers.RegisterCtrl  = function($scope,$resource,$interval,localized,recaptcha, simpleFactory,vcRecaptchaService){
    $scope.format = 'M/d/yy h:mm:ss a';
//   console.log(recaptcha.query());

    var titi =  $interval(function(success) {
        console.log("toto");

    }, 1000);


    $scope.stopFight = function(){
        $interval.cancel(titi);
        titi= undefined;
    };

    $scope.$on('$destroy', function() {
        // Make sure that the interval is destroyed too
        $scope.stopFight();
    });


    console.log(titi);
    $scope.todos = simpleFactory;
    $scope.localized = localized.query();

    $scope.getTotalTodos = function(){
        var total  = 0;
        for( i  = 0; i < $scope.todos.length; i++){
            if(!$scope.todos[i].done){
                total++;
            }
        }
        return total;
    }

    $scope.clearCompleted = function(){
        $scope.todos = $scope.todos.filter(function(todo){
            return !todo.done;
        })
    }

    $scope.addTodo = function(){
        $scope.todos.push({text:$scope.formTodoText , done:false}) ;
        $scope.formTodoText ='';
    }
    $scope.submit = function () {
        var valid;
        console.log('sending the captcha response to the server', vcRecaptchaService.data());
        recaptcha.save(vcRecaptchaService.data(),function (response) {
            if (response.valid) {
                console.log('Success');
            } else {
                console.log('Failed validation');
                // In case of a failed validation you need to reload the
                // captcha because each challenge can be checked just once
                vcRecaptchaService.reload();
            }
        });
    };
};

//home view controller
controllers.HomeCtrl = function($scope,$location){
    $scope.changeView = function(newView){
        $location.path(newView);
    }
};


//adding all controllers to the app object
linker.controller(controllers);