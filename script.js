document.addEventListener('DOMContentLoaded', () => {
    // ===== 1. MENÚ HAMBURGUESA MÓVIL =====
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar el menú al hacer clic en cualquier enlace
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
                // Cierra las demás preguntas para que solo una esté abierta a la vez
                faqItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove('active');
                    }
                });

                // Alterna la clase active en la pregunta seleccionada
                item.classList.toggle('active');
            });
        }
    });
});