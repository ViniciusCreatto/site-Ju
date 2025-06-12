// Inicializar elementos quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar carrossel
    const carousel = new Carousel();
    
    // Inicializar efeito de digitação
    const typingEffect = new TypingEffect();
    
    // Adicionar efeito de confetes ao rolar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            createConfetti();
        }
    });

    // Adicionar evento para o botão de surpresa
    const surpriseButton = document.getElementById('surpriseButton');
    if (surpriseButton) {
        surpriseButton.addEventListener('click', () => {
            const surpriseContent = document.getElementById('surpriseContent');
            if (surpriseContent) {
                surpriseContent.classList.remove('hidden');
                surpriseButton.style.display = 'none';
                
                // Adicionar efeito de animação
                surpriseContent.style.opacity = '0';
                surpriseContent.style.transform = 'translateY(20px)';
                surpriseContent.style.transition = 'all 0.5s ease-in-out';
                
                setTimeout(() => {
                    surpriseContent.style.opacity = '1';
                    surpriseContent.style.transform = 'translateY(0)';
                }, 50);
            }
        });
    }
});

// Função para criar confetes
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
    confetti.style.backgroundColor = getRandomColor();
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
}

function getRandomColor() {
    const colors = ['#ff69b4', '#ffd700', '#ff1493', '#8b008b'];
    return colors[Math.floor(Math.random() * colors.length)];
}
