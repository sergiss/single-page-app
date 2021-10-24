import index from "../pages/index.js";
var router;

const root = document.querySelector("#root");
root.innerHTML = index.build();

function load(src, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status == 200) {
      callback(this.responseText);
    }
  };
  xhr.open("GET", src, true);
  xhr.send();
}

function handlePathname(path) {
  let route = router[path];
  root.querySelector(".content").innerHTML = route.build();
  return path;
}

load("./resources/pages/router.json", (json) => { // load router
  const routes = JSON.parse(json);
  const promises = [];
  let n = routes.length, i;
  for (i = 0; i < n; ++i) {
    promises.push(import(routes[i].content));
  }
  Promise.all(promises).then((results) => { // wait async promises
    router = {}; // clear route
    for (i = 0; i < n; ++i) { // iterate results
      const value = results[i].default;
      routes[i].paths.map((path) => {
        router[path] = value; // store content (key, value)
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
