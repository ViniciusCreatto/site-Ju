class Carousel {
    constructor() {
        this.carouselInner = document.querySelector('.carousel-inner');
        this.slides = document.querySelectorAll('.carousel-item');
        this.totalSlides = this.slides.length;
        this.paused = false;
        this.interval = null;
        this.currentSlide = 0;
        this.descriptions = [
            {
                title: "As primeiras fotos",
                text: "Foi o início de tudo..."
            },
            {
                title: "Minha Heroína",
                text: "Momentos inesquecíveis..."
            },
            {
                title: "Alguns momentinhos",
                text: "Memórias especiais..."
            },
            {
                title: "Nossa viagem inesquecível",
                text: "Momentos que ficarão para sempre na nossa memória..."
            },
            {
                title: "Nossos momentos de felicidade",
                text: "Risos e sorrisos que nos unem..."
            },
            {
                title: "Nossa conexão especial",
                text: "Uma conexão que só cresce..."
            }
        ];

        // Inicia o autoplay
        this.startInterval();

        // Adiciona eventos para os botões
        document.getElementById('pauseButton').addEventListener('click', () => this.togglePause());
        document.getElementById('prevButton').addEventListener('click', () => this.prevSlide());
        document.getElementById('nextButton').addEventListener('click', () => this.nextSlide());

        // Adiciona suporte a toque para dispositivos móveis
        this.carouselInner.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.carouselInner.addEventListener('touchend', (e) => this.handleTouchEnd(e));

        // Atualiza a descrição inicial
        this.updateDescription();
    }

    startInterval() {
        this.interval = setInterval(() => this.nextSlide(), 5000);
    }

    togglePause() {
        if (this.paused) {
            this.startInterval();
            document.getElementById('pauseButton').innerHTML = `<i class="fas fa-pause"></i> Pausar`;
        } else {
            clearInterval(this.interval);
            document.getElementById('pauseButton').innerHTML = `<i class="fas fa-play"></i> Continuar`;
        }
        this.paused = !this.paused;
    }

    prevSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.slides[this.currentSlide].classList.add('active');
        this.updateDescription();
    }

    nextSlide() {
        // Remove a classe active do slide atual
        this.slides[this.currentSlide].classList.remove('active');
        
        // Calcula o próximo slide
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        
        // Adiciona a classe active ao novo slide
        this.slides[this.currentSlide].classList.add('active');
        
        // Atualiza a descrição
        this.updateDescription();
    }

    updateDescription() {
        const currentDesc = this.descriptions[this.currentSlide];
        document.getElementById('currentSlideText').textContent = currentDesc.title;
        document.getElementById('currentSlideDescription').textContent = currentDesc.text;
    }

    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
    }

    handleTouchEnd(e) {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchEndX < this.touchStartX) {
            this.nextSlide();
        }
        if (touchEndX > this.touchStartX) {
            this.prevSlide();
        }
    }
}
