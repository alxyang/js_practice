function route(handle, pathname, response){
    console.log("About to route a request for " + pathname);
    /* What we do here is, we check if a request handler for the given pathname exists, and if it does, we simply call the according function. Because we can access our request handler functions from our object just as we would access an element of an associative array, we have this nice fluent handle[pathname](); expression I talked about earlier: “Please, handle this pathname”. */
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();
        // return "404 not found";
    }
}

exports.route = route;