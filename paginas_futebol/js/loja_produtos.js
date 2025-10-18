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
  // Remove ativo do slide atual
  seasonSlides[currentSeasonSlide].classList.remove('active');
  
  // Avança para o próximo slide (ou volta ao primeiro)
  currentSeasonSlide = (currentSeasonSlide + 1) % seasonSlides.length;
  
  // Adiciona ativo no novo slide
  seasonSlides[currentSeasonSlide].classList.add('active');
});

