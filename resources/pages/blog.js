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
        ${entries.map((e) =>
              `<div class="card">
                <h2 style="margin-bottom: 5px">${e.title}</h2>
                <h5 style="margin-top: 5px">${e.date}</h5>
                <img class="preview-image" style="height:200px;" src=${e.image} alt="preview"></img>
                <p>${e.description}</p>
              </div>`
          ).join('')}
        </div>
        <div class="rightcolumn">
          <div class="card">
            <h2>About Me</h2>
            <div class="preview-image" style="height:100px;">Image</div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
          </div>
          <div class="card">
            <h3>Popular Post</h3>
            <div class="preview-image">Image</div>
            <br />
            <div class="preview-image">Image</div>
            <br />
            <div class="preview-image">Image</div>
          </div>
          <div class="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>
    `;
  },
};