export default {
    build: () => {

      document.title = "Entry 1";

      return `
      <div class="entry">
        <h2>Entry 1</h2>
        <a class="button" href="/entry2" content-link>Entry 2</a>
        <div></div>
      </div>
    `;
    }
  }