let portfolioImages = document.querySelectorAll('.portfolio-image');

for (let i = 0; i < portfolioImages.length; i++) {
  if (i > 5) {
    portfolioImages[i].classList.add('hidden');
  }
}

const viewMoreBtn = document.querySelector('#view-more-btn');

viewMoreBtn.addEventListener('click', () => {
  for(let i = 0; i < portfolioImages.length; i++) {
    portfolioImages[i].classList.remove('hidden');
  }
});

