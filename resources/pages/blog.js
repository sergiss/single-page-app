export default {
  build: (state) => {
    // Update page title
    document.title = "Blog | Sergio Soriano";
    // Filter and sort entries
    const entries = state.routes
      .filter((e) => e.type === "blog-entry")
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    // Generate HTML
    return `<div class="blog">
      <div class="leftcolumn">
        ${entries
          .map((e) =>
              `<div class="card" style="cursor:pointer" href="${e.paths[0]}" content-link>
                <h2 style="margin-bottom: 5px">${e.title}</h2>
                <p style="margin-top: 5px">${e.date}</p>
                <img class="preview-image" src=${e.image} alt="preview"></img>
                <p>${e.description}</p>
              </div>`
          ).join("")}
      </div>
      <div class="rightcolumn">
        <div class="card">
          <h2>About Me</h2>
          <div style="overflow:hidden;">
              <img style="height:100px;" src="/resources/images/avatar.jpg" alt="my photo"></img>
          </div>
          <p>Hy my name is Alf, I love the cats in culpa qui officia deserunt mollit anim...</p>
        </div>
        <div class="card">
          <h3>Popular Post</h3>
          ${entries.slice(0, Math.min(entries.length, 3))
            .map((e) =>
                `<div style="cursor:pointer; overflow:hidden;" href="${e.paths[0]}" content-link>
                  <img class="preview-image" style="height:100px;" src=${e.image} alt="preview"></img>
                </div>`
            ).join("")}
        </div>
        <div class="card">
          <h3>Follow Me</h3>
          <div class="follow-me">
          <a href="https://github.com/sergiss" target="_blank" rel="noopener noreferrer">
            <img
              alt="github"              
              src="/resources/images/octocat.jpg"
              width="auto"
              height="42"              
            />
            </a>
            <a href="https://github.com/sergiss" target="_blank" rel="noopener noreferrer">
            <img
              alt="github"              
              src="/resources/images/in.svg"
              width="auto"
              height="42"              
            />
            </a>
            <a href="https://github.com/sergiss" target="_blank" rel="noopener noreferrer">
            <img
              alt="github"
              src="/resources/images/twitter.svg"
              width="auto"
              height="42"              
            />
            </a>
          </div>
        </div>
      </div>
    </div> `;
  },
};
