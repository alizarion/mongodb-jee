/**
 * Created by selim.bensenouci on 04/03/14.
 */
linker.factory('simpleFactory', function(){
    var factory = [{text: 'Learn AngularJS',done:false},
        {text:'faire une application',done:false}];
    return factory;
})
linker.factory('recaptcha', function ($resource) {
    return $resource('rest/recaptcha', {});
});

linker.factory('localized', function($resource){
    return $resource('rest/localized',{});
});