/**
 * Created by selim.bensenouci on 23/01/14.
 */

var Promise=(function() {
    var AWAIT=0, SUCCESS=1, FAIL=-1;
    function Promise(logic) {
        var promise=this;
        promise.solved=AWAIT;
        var success=function (value) {
            if(AWAIT!==promise.solved)
                return;
            promise.solved=SUCCESS;
            promise.value=value;
            if(promise.successCallback)
                promise.successCallback(value);
        };
        var fail=function (error) {
            if(AWAIT!==promise.solved)
                return;
            promise.solved=FAIL;
            promise.error=error;
            if(promise.failCallback)
                promise.failCallback(error);
        };
        var progress=function (value) {
            if(AWAIT!==promise.solved)
                return;
            if(promise.progressCallback)
                promise.progressCallback(error);
        };
        promise.dispose=logic(success, fail, progress);
    }

    Promise.prototype.then = function(success, fail, progress) {
        var thenSuccess, thenFail, thenProgress, returnValue, promise=this;
        var thenPromise=new Promise(function(success,fail,progress) {
            thenSuccess=success;
            thenFail=fail;
            thenProgress=progress;
        });
        var successLogic=function() {
            if(success)
                returnValue=success(promise.value);
            if(returnValue instanceof Promise) {
                returnValue.then(thenSuccess, thenFail, thenProgress);
            } else {
                thenSuccess(returnValue);
            }
        };
        var failLogic=function() {
            if(fail)
                returnValue=fail(promise.error);
            thenFail&&thenFail(returnValue.error);
        };
        if(AWAIT===this.solved) {
            this.successCallback=successLogic;
            this.failCallback=failLogic;
            this.progressCallback=progress;
        } else if(SUCCESS===this.solved) {
            setTimeout(successLogic,0);
        } else {
            setTimeout(failLogic,0);
        }
        return thenPromise;
    };

    Promise.all=function () {
        var promises=Array.prototype.slice.call(arguments,0),
            solved=0,
            returnValues=new Array(promises.length);
        return new Promise(function(successCallback,errorCallback) {
            var promiseSuccess=function(promise,index) {
                return function(value) {
                    if(solved<promises.length) {
                        returnValues[index]=value;
                        solved++;
                        if(solved==promises.length)
                            successCallback(returnValues);
                    }
                }
            };
            var promiseError=function(promise,index) {
                return function(error) {
                    if(solved<promises.length) {
                        errorCallback(error);
                        solved=promises.length;
                    }
                }
            };
            promises.forEach(function(promise,index){
                promise.then(promiseSuccess(promise,index),
                    promiseError(promise,index));
            });
        });
    };

    Promise.any=function () {
        var promises=Array.prototype.slice.call(arguments,0);
        var errors=0;
        return new Promise(function(successCallback,errorCallback) {
            var promiseSuccess=function(value) {
                successCallback(value);
                promises.forEach(function(p) {
                    AWAIT===p.solved&&p.dispose&&p.dispose();
                });
            };
            var promiseError=function(error) {
                if(++errors===promises.length)
                    errorCallback(error);
            };
            promises.forEach(function(promise,index){
                promise.then(promiseSuccess,promiseError);
            });
        });
    };

    return Promise;
})();

// Event promise generator
function getEventPromise(type, element, capture, iterations) {
    iterations=iterations||1;
    return new Promise(function(success,error) {
        var eventHandler=function(event) {
            iterations--;
            if(iterations<1) {
                success(event);
                dispose();
            }
        };
        var dispose=function() {
            element.removeEventListener(type, eventHandler, capture);
        };
        element.addEventListener(type, eventHandler, capture);
        return dispose;
    });
}

// menu : do something if click on any button
var menuView=document.getElementById('view1');
function menu() {
    // showing the menu
    menuView.classList.add('selected');
    Promise.any(
            getEventPromise('click',document.getElementById('view2button')),
            getEventPromise('click',document.getElementById('view3button'))
        )
        // then we show the view
        .then(function(event) {
            var viewId=event.target.getAttribute('id').replace('button',''),
                view=document.getElementById(viewId),
                viewPromises=[];
            // hide the menu
            menuView.classList.remove('selected');
            // show the view
            view.classList.add('selected');
            if(viewId=='view2') {
                function promiseAlert() {
                    viewPromises.push(getEventPromise('click',document.getElementById('view2alertbutton')));
                    viewPromises[viewPromises.length-1].then(function() {
                        alert('alert'); promiseAlert();
                    });
                };
                promiseAlert();
            } else {
                viewPromises.push(getEventPromise('click',document.getElementById('view3promptbutton')));
                viewPromises[viewPromises.length-1].then(function() { prompt('prompt'); });
            }
            // create a promise when clicking on the back back button
            // to restart the menu
            return getEventPromise('click',document.getElementById(viewId+'backbutton'))
                // dispose the view first
                .then(function() {
                    // hide the view
                    view.classList.remove('selected');
                    // dispose promises
                    viewPromises.forEach(function(p){ p.dispose(); });
                });
        })
        // then we jump back to the menu view
        .then(menu);
}
menu();