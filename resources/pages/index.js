export default {
  build: () => {

    const logo = "favicon.ico";
    const title = "My Blog";
    const year = new Date().getFullYear();
    const href = "http://sergiosoriano.com";
    const label = "Sergio Soriano";

    return `
      <header>
        <img src="${logo}" alt="logo"/><h1><a href="/" content-link>${title}</a></h1>
      </header>

      <div class="content"></div>

      <footer id="footer">
        <a href=${href} target="_blank" rel="noopener noreferrer"> &copy; ${year} ${label} </a>
      </footer>
    `
  }
}