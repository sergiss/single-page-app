import index from "../pages/index.js";
var state = {};

const root = document.querySelector("#root");
root.innerHTML = index.build();

function handlePathname(path) { // resolve pathname
    let route = state.router[path];
    if(!route || route === undefined) {
      route = state.router["404"];
    }
    root.querySelector(".content").innerHTML = route.build(state);
    if(route.script) route.script();
    return path;
}
state.handlePathname = handlePathname;

function load(src, callback) { // helper for load content
  console.log(src)
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      callback(this.responseText);
    }
  };
  xhr.open("GET", src, true);
  xhr.send();
}

load("resources/pages/router.json", json => { // load router
  state.routes = JSON.parse(json);
  const promises = [];
  let n = state.routes.length, i;
  for (i = 0; i < n; ++i) {
    promises.push(import(state.routes[i].content));
  }
  Promise.all(promises).then(results => { // async wait for promises
    state.router = {}; // clear route
    for (i = 0; i < n; ++i) { // iterate results
      const value = results[i].default;
      state.routes[i].paths.map((path) => {
        state.router[path] = value; // store content (key, value)
      });
    }
    history.replaceState(null, null, handlePathname(window.location.pathname)); // Load content
  });
});

window.addEventListener("popstate", function(e) {
    handlePathname(window.location.pathname);
});

document.body.addEventListener("click", function (e) { // check if a content link has been clicked 
    let node = e.target;
    while (node !== document.body) {
      if (node.hasAttribute("content-link")) {
        e.preventDefault();
        history.pushState(null, null, handlePathname(node.getAttribute("href")));
        break;
      } 
      node = node.parentNode;
    }
});