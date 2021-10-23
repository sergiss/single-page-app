import index from "../pages/index.js"
import blog from "../pages/blog.js";
const root = document.querySelector("#root");
root.innerHTML = index.build();

root.querySelector(".content").innerHTML = blog.build(); // TODO : testing