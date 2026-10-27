const portfolioAllContainer = document.querySelector('.portfolio-all');
const portfolioFashionContainer = document.querySelector('.portfolio-fashion');
const portfolioLandscapeContainer = document.querySelector('.portfolio-landscape');
const portfolioPortraitContainer = document.querySelector('.portfolio-portrait');

const viewMoreBtn = document.querySelector('#view-more-btn');

document.querySelector('#portfolio-all-btn').addEventListener('click', () => {
  portfolioAllContainer.classList.remove('hidden');
  hideOtherPortfolios(portfolioFashionContainer, portfolioLandscapeContainer, portfolioPortraitContainer);
  showViewMoreBtn();
});

document.querySelector('#portfolio-fashion-btn').addEventListener('click', () => {
  portfolioFashionContainer.classList.remove('hidden');
  hideOtherPortfolios(portfolioAllContainer, portfolioLandscapeContainer, portfolioPortraitContainer);
  hideViewMoreBtn();
});

document.querySelector('#portfolio-landscape-btn').addEventListener('click', () => {
  portfolioLandscapeContainer.classList.remove('hidden');
  hideOtherPortfolios(portfolioAllContainer, portfolioFashionContainer, portfolioPortraitContainer);
  hideViewMoreBtn();
});

document.querySelector('#portfolio-portrait-btn').addEventListener('click', () => {
  portfolioPortraitContainer.classList.remove('hidden');
  hideOtherPortfolios(portfolioAllContainer, portfolioFashionContainer, portfolioLandscapeContainer);
  showViewMoreBtn();
});

function hideOtherPortfolios(container1, container2, container3) {
  container1.classList.add('hidden');
  container2.classList.add('hidden');
  container3.classList.add('hidden')
}

function showViewMoreBtn() {
  viewMoreBtn.classList.remove('hidden');
}



function hideViewMoreBtn() {
  viewMoreBtn.classList.add('hidden');
}
