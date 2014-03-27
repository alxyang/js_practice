// var promise = $.ajax({
//     url: "ajax/test.html"
// });

// promise.done(successFunction);
// promise.fail(errorFunction);
// promise.always(alwaysFunction);

//  OR

//  var promise = $.ajax("ajax/test.html")
//     .done(function(){console.log("success");})
//     .fail(function(){console.log("fail");})
//     .always(function(){console.log("always");})

//     //perform some work here...
//     console.log("derp");

// promise.done(function(){console.log(" another success");})

// OR

// var promise = $.ajax({
//     url: "ajax/test.html"
// });

// promise.then(successFunction, errorFunction);

//when method, calls done when both conditions fulfilled
// var promise1 = $.ajax("ajax/test1.html");
// var promise2 = $.ajax("ajax/test2.html");

// $.when(promise1, promise2).done(function(promise1, promise2){
//     console.log("all complete");
// });

// console.log("derp");

var timer;
$('.result').html('waiting...');

var promise = process();

promise.done(function(){
    $('.result').html('done.');
});
promise.progress(function(){
    $('.result').html('.');
});

// Inside the process() method, a Deferred object is assigned to a local variable so that we can call its resolve(), promise(), and notify() events
function process(){
    //create deferred object
    var deferred = $.Deferred();

    timer = setInterval(function(){
        deferred.notify();
    }, 1000);

    setTimeout(function(){
        clearInterval(timer);
        deferred.resolve();
    }, 5000);

    return deferred.promise();
}

console.log("derp");





