/**********************************tutorial3 **********************************/
/**********************************tutorial3 **********************************/
/**********************************tutorial3 **********************************/







/**********************************tutorial2 **********************************/
/**********************************tutorial2 **********************************/
/**********************************tutorial2 **********************************/

// WRONG: this will make the UI freeze when getting the data  
// var data = getData();
// alert("We got data: " + data);

// var dataPromise = getData();

// dataPromise.done(function(data){
//     console.log("We got data " + data);
// });

// dataPromise.fail(function(data){
//     console.log("We got data " + data);
// });

// dataPromise.done(function(data){
//     console.log("We got data again " + data);
// });

// // when you need to resolve two separate promises to get something done use $.when
// // var combinedPromise = $.when(getData(), getLocation());
// // combinedPromise.done(function(data, location){
// //     console.log("We got data: " + dataResult + " and location: " + location);
// // });

// function getData(){
//     var deferred = $.Deferred();

//     //create ajax request
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "ajax/test1.html", true);

//     xhr.addEventListener('load', function(){
//         if(xhr.status === 200){
//             deferred.resolve(xhr.response);
//         } else{
//             deferred.reject("HTTP error: " + xhr.status);
//         }
//     }, false)

//     xhr.send();


//     //or instead we can use Jquery ajax here.....implement it here

//     return deferred.promise();
// }

/**********************************tutorial1 **********************************/
/**********************************tutorial1 **********************************/
/**********************************tutorial1 **********************************/

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

// var timer;
// $('.result').html('waiting...');

// var promise = process();

// promise.done(function(){
//     $('.result').html('done.');
// });
// promise.progress(function(){
//     $('.result').html('.');
// });

// // Inside the process() method, a Deferred object is assigned to a local variable so that we can call its resolve(), promise(), and notify() events
// function process(){
//     //create deferred object
//     var deferred = $.Deferred();

//     timer = setInterval(function(){
//         deferred.notify();
//     }, 1000);

//     setTimeout(function(){
//         clearInterval(timer);
//         deferred.resolve();
//     }, 5000);

//     return deferred.promise();
// }

// console.log("derp");





