// =================================
// MENU HAMBURGUER
// =================================

// Seleciona elementos do DOM
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

// Função para abrir/fechar o menu
function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Adiciona evento de clique no botão hamburguer
hamburger.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar em um link (importante para mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// =================================
// CARROSSEL
// =================================

// Variáveis do carrossel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let autoPlayInterval;

// Função para mostrar um slide específico
function showSlide(index) {
    // Remove a classe 'active' de todos os slides
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev');
    });
    
    // Remove a classe 'active' de todos os dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Adiciona a classe 'active' ao slide atual
    slides[index].classList.add('active');
    
    // Adiciona a classe 'active' ao dot atual
    dots[index].classList.add('active');
}

// Função para ir para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Função para ir para o slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Função para ir para um slide específico (via dots)
function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

// Função para iniciar o auto-play
function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000); // Muda a cada 5 segundos
}

// Função para parar o auto-play
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Event listeners para os botões do carrossel
document.getElementById('nextBtn').addEventListener('click', () => {
    nextSlide();
    stopAutoPlay(); // Para o auto-play quando o usuário interage
    startAutoPlay(); // Reinicia o auto-play
});

document.getElementById('prevBtn').addEventListener('click', () => {
    prevSlide();
    stopAutoPlay();
    startAutoPlay();
});

// Event listeners para os dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
        stopAutoPlay();
        startAutoPlay();
    });
});

// Navegação por teclado (acessibilidade)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
        stopAutoPlay();
        startAutoPlay();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
        stopAutoPlay();
        startAutoPlay();
    }
});

// Pausa o auto-play quando o mouse está sobre o carrossel
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', stopAutoPlay);
carouselContainer.addEventListener('mouseleave', startAutoPlay);

// Inicia o auto-play quando a página carrega
startAutoPlay();

// =================================
// SCROLL SUAVE PARA LINKS ÂNCORA
// =================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Calcula a posição considerando a altura da navbar
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =================================
// ANIMAÇÃO AO SCROLL (OPCIONAL)
// =================================

// Observer para animar elementos quando aparecem na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observa elementos que devem ter animação ao scroll
document.querySelectorAll('.feature-card, .tech-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});