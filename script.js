const post_container = document.getElementById("posts-container");
const filter = document.getElementById("filter");
const loader = document.getElementById("loader");

let limit = 3;
let page = 1;

async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = res.json();

  return data;
}

async function showPosts() {
  const posts = await getPosts();

  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
    <div class="number">${post.id}</div>
    <div class="post-info">
      <h2 class="post-title">${post.title}</h2>
      <p class="post-body">
        ${post.body}
      </p>
    </div>
    `;

    post_container.appendChild(postEl);
  });
}

showPosts();
