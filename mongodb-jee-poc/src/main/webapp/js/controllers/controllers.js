/**
 * Created by selim.bensenouci on 21/01/14.
 */

function HomeCtrl($scope,$resource,recaptcha, simpleFactory,vcRecaptchaService){

//   console.log(recaptcha.query());
    $scope.todos = simpleFactory;


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

        recaptcha.save(vcRecaptchaService.data(),function(response){
           console.log(response);
        });
        // You need to implement your server side validation here.
        // Send the model.captcha object to the server and use some of the server side APIs to validate it
        // See https://developers.google.com/recaptcha/docs/

        if (valid) {
            console.log('Success');

        } else {
            console.log('Failed validation');

            // In case of a failed validation you need to reload the captcha because each challenge can be checked just once
            vcRecaptchaService.reload();
        }
    };
}