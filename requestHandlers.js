//nodejs module child_process
//allows us to use exec(), non-blocking operation
var exec = require("child_process").exec;

function start(response){
    console.log("Request handler 'start' was called. ");

    // var content = "empty";

    //exec allows us to execute a shell command from within Node, ASYNCHRONOUSLY
    //we use this to get a list of all files in the current directory, display it in start
    // exec("ls -lah", function(error,stdout,stderr){
    //     response.writeHead(200, {"Content-Type": "text/plain"});
    //     response.write(stdout);
    //     response.end();
    // });

var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form action="/upload" method="post">'+
'<textarea name="text" rows="20" cols="60"></textarea>'+
'<input type="submit" value="Submit text" />'+
'</form>'+
'</body>'+
'</html>';

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();

    // return content;
    // //blocking operation!
    // function sleep(milliSeconds){
    //     var startTime = new Date().getTime();
    //     while ( new Date().getTime() < startTime + milliSeconds);
    // }
    // sleep(10000);
    // return "Hello Start";
}

function upload(response){
    console.log("Request handler 'upload' was called.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello Upload");
        response.end();
}

exports.start = start; //can only export one function at a time
exports.upload = upload;