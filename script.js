const post_container = document.getElementById("posts-container");
const filter = document.getElementById("filter");
const loader = document.getElementById("loader");

let limit = 3;
let page = 1;

async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
}
