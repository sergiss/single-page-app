export default {
  build: () => {
    document.title = "Entry 3";

    return `
    <div class="entry">
      <h2>Entry 3</h2>
      <a class="button" href="/entry1" content-link>Entry 1</a>
      <div></div>
    </div>
  `;
  },
};
