/**
 * Created by selim.bensenouci on 04/03/14.
 */
var primefaces= angular.module('sbPrimeFaces', []);

var PATH = 'js/lib/component/primefaces/directives/template/';

primefaces.directive('checkStrength', function () {
    return {
        replace: false,
        require: 'ngModel',
        scope:{
            regexValidation:'=',
            checkStrength:'=',
            ngModel:'='
        },
        restrict: 'EACM',
        link: function (scope, iElement, iAttrs, ctrl) {
            var strength = {
                colors: ['#F00', '#F90', '#FF0', '#9F0', '#0F0'],
                mesureStrength: function (p) {

                    var _force = 0;
                    var _regex = /[$-/:-?{-~!"^_`\[\]]/g;

                    var _lowerLetters = /[a-z]+/.test(p);
                    var _upperLetters = /[A-Z]+/.test(p);
                    var _numbers = /[0-9]+/.test(p);
                    var _symbols = _regex.test(p);
                    console.log('_lowerLetters: ' +_lowerLetters +
                        '_upperLetters:' + _upperLetters+ '_numbers:'+_numbers)
                    var _flags = [_lowerLetters, _upperLetters, _numbers, _symbols];
                    var _passedMatches = $.grep(_flags, function (el) { return el === true; }).length;

                    _force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
                    _force += _passedMatches * 10;

                    // penality (short password)
                    _force = (p.length <= 6) ? Math.min(_force, 10) : _force;

                    // penality (poor variety of characters)
                    _force = (_passedMatches == 1) ? Math.min(_force, 10) : _force;
                    _force = (_passedMatches == 2) ? Math.min(_force, 20) : _force;
                    _force = (_passedMatches == 3) ? Math.min(_force, 40) : _force;

                    return _force;

                },
                getColor: function (s) {
                    var idx = 0;
                    if (s <= 10) { idx = 0; }
                    else if (s <= 20) { idx = 1; }
                    else if (s <= 30) { idx = 2; }
                    else if (s <= 40) { idx = 3; }
                    else { idx = 4; }
                    return { idx: idx + 1, col: this.colors[idx] };
                }
            };
            scope.$watch('checkStrength', function () {
                console.log(scope.ngModel);
                if (scope.ngModel === '' || scope.ngModel == undefined ) {
                    iElement.css({ "display": "none"  });

                } else {
                    var c = strength.getColor(strength.mesureStrength(scope.ngModel));
                    iElement.css({ "display": "inline" });
                    iElement.children('li')
                        .css({ "background": "#DDD" })
                        .slice(0, c.idx)
                        .css({ "background": c.col });
                }
            },true);

            return undefined;
        },
        template: '<li class="point"></li><li class="point">' +
            '</li><li class="point"></li><li class="point">' +
            '</li><li class="point"></li>'
    };
});

primefaces.directive('checkRegex', function() {
    return {
        require: 'ngModel',
        scope:{
            regexValidation: '='
        },
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {
                if(scope.regexValidation != undefined && scope.regexValidation != ''){
                    var pattern = new RegExp(scope.regexValidation);
                    console.log('regex : ',pattern , 'value :' ,viewValue);
                    if (pattern.test(viewValue)) {
                        // it is valid
                        ctrl.$setValidity('regex', true);
                        return viewValue;
                    } else {
                        // it is invalid, return undefined (no model update)
                        ctrl.$setValidity('regex', false);
                        return undefined;
                    }
                }    else {
                    return viewValue;
                }
            });
        }
    };
});

primefaces.directive('pwCheck', [function () {
    return {
        scope: false,
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('blur', function () {
                scope.$apply(function () {
                    var v = elem.val()===$(firstPassword).val();
                    ctrl.$setValidity('pwmatch', v);
                });
            });
        }
    }
}]);

primefaces.directive('sbPassword',function(){
    return {
        restrict:'AE',
        scope :{
            pw: '=',
            myForm :'=',
            labelPassword :'@',
            labelConfirmPassword :'@',
            errorPwCheck :'@',
            minLength:'@',
            validationRegex:'@',
            validationRegexErrorMsg:'@'
        },
        templateUrl: PATH+'passwordCheck.html'
    }
});

primefaces.directive('login',function(){
    return {
        templateUrl: PATH+'login.html'
    };
});

primefaces.directive('localizationTemplate',function(){
    return {
        template: {}
    }
}) ;