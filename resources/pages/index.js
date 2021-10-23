export default {
  build: () => {

    const title = "Sergio Soriano";
    const year = new Date().getFullYear();
    const href = "http://sergiosoriano.com";
    const label = "Sergio Soriano";

    return `
      <header>
        <h1>${title}</h1>
      </header>

      <div class="content"></div>

      <footer id="footer">
        <a href=${href} target="_blank" rel="noopener noreferrer"> &copy; ${year} ${label} </a>
      </footer>
    `
  }
}
