// ======= CARROSSEL AUTOMÁTICO DO BANNER =======
let currentBanner = 0;
const bannerSlides = document.querySelectorAll(".banner-slide");
const totalBannerSlides = bannerSlides.length;

setInterval(() => {
  // Remove ativo do slide atual
  bannerSlides[currentBanner].classList.remove("active");
  
  // Avança para o próximo slide (ou volta ao primeiro)
  currentBanner = (currentBanner + 1) % totalBannerSlides;
  
  // Adiciona ativo no novo slide
  bannerSlides[currentBanner].classList.add("active");
}, 5000); // troca a cada 5 segundos













// ======= CARROSSEL MANUAL DA TEMPORADA =======
let currentSeasonSlide = 0;
const seasonSlides = document.querySelectorAll('.season-slide');
const nextButton = document.querySelector('.next-slide');

nextButton.addEventListener('click', () => {
  seasonSlides[currentSeasonSlide].classList.remove('active');
  currentSeasonSlide = (currentSeasonSlide + 1) % seasonSlides.length;
  seasonSlides[currentSeasonSlide].classList.add('active');
});





const carrossel = document.querySelectorAll('.carrossel-produtos');
carrossel.forEach(carro => {
  const btnPrev = carro.querySelector('.btn-prev');
  const btnNext = carro.querySelector('.btn-next');
  const flex = carro.querySelector('.flex');

  btnPrev.addEventListener('click', () => {
    flex.scrollBy({ left: -300, behavior: 'smooth' });
  });

  btnNext.addEventListener('click', () => {
    flex.scrollBy({ left: 300, behavior: 'smooth' });
  });
});
