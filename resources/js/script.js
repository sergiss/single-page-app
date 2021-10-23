import index from "../pages/index.js"
const router = {};

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
    console.log(path)
    let route = router[path];
    root.querySelector(".content").innerHTML = route.build();
}

load("./resources/pages/router.json", (json)=> {
    const routes = JSON.parse(json);
    const n = routes.length - 1;
    routes.map((route, i)=> {
        import(route.content).then(value=> {
            value = value.default;
            router[route.id] = value;
            if(route.default) {                
                router["/"] = value;
                router["/index"] = value;
                router["/index.html"] = value;
            }
            if(i === n) {
                // TODO : load first
                handlePathname(window.location.pathname)
                // root.querySelector(".content").innerHTML = router[route.id].build();
            }
        });       
    });
});



