document.addEventListener('DOMContentLoaded', () => {
    // ===== 1. MENÚ HAMBURGUESA MÓVIL =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // ===== 2. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ) =====
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                
                faqItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove('active');
                    }
                });

                
                item.classList.toggle('active');
            });
        }
    });
});