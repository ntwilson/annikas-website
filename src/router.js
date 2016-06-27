import * as requestHandlers from "./requestHandlers";

var handle = {};
handle["/"] = requestHandlers.index;
handle["/bundle.js"] = requestHandlers.js;
handle["/stylesheet.css"] = requestHandlers.css;
handle["/bootstrap.min.css"] = requestHandlers.bootstrap;
handle["image"] = requestHandlers.img;
handle["/favicon.ico"] = () => '';

export function route(pathname, response, request) {
  console.log("About to route a request for " + pathname);
  if (pathname.startsWith("/images/")) {
    const subPaths = pathname.split("/");
    handle['image'](subPaths[subPaths.length - 1], response, request);
  }
  else if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } 
  else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/html"});
    response.write("404 Not found");
    response.end();
  }
}
