const renderRandomTerm = (terms) => {
  const titleElement = document.querySelector('h1.title');
  const descriptionElement = document.querySelector('p.description');

  const titles = Object.keys(terms);

  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  const randomDescription = terms[randomTitle];

  titleElement.innerText = `${randomTitle}`;
  descriptionElement.innerText = randomDescription;
};

window.addEventListener('DOMContentLoaded', (event) => {
  let terms = {};

  if (localStorage.hasOwnProperty("GolfGlossary")) {
    terms = JSON.parse(localStorage.getItem("GolfGlossary"));
    renderRandomTerm(terms);
  }

  const seeMoreButton = document.querySelector("button.see-more-button");
  seeMoreButton.addEventListener("click", () => renderRandomTerm(terms));
});
