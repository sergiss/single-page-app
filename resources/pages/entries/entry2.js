export default {
    build: () => {

      document.title = "Entry 2";

      return `
      <div class="entry">
        <h2>Entry 2</h2>
        <a class="button" href="/entry3" content-link>Entry 3</a>
        <div></div>
      </div>
    `;
    }
  }