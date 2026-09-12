/* ========================================
   VANMOOF S6 — Hero Card Section Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  const card = document.querySelector('.hero-card');
  const title = document.querySelector('.hero-card__title');

  if (!card || !title) return;

  // -------- PARALLAX ON TITLE (desktop only) --------
  if (window.matchMedia('(min-width: 768px)').matches) {
    let ticking = false;

    const handleParallax = () => {
      const rect = card.getBoundingClientRect();
      const cardHeight = card.offsetHeight;
      const viewportCenter = window.innerHeight / 2;

      // Calculate how far the card center is from viewport center
      const cardCenter = rect.top + cardHeight / 2;
      const offset = (cardCenter - viewportCenter) / cardHeight;

      // Subtle vertical shift on the S6 text
      const translateY = offset * 30;
      title.style.transform = `translateY(${translateY}px)`;

      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(handleParallax);
        ticking = true;
      }
    }, { passive: true });

    // Initial call
    handleParallax();
  }

  // -------- SUBTLE MOUSE FOLLOW GLOW (desktop) --------
  if (window.matchMedia('(min-width: 1024px)').matches) {
    const bg = card.querySelector('.hero-card__bg');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      bg.style.setProperty('--mouse-x', `${x}%`);
      bg.style.setProperty('--mouse-y', `${y}%`);
    });

    card.addEventListener('mouseleave', () => {
      bg.style.removeProperty('--mouse-x');
      bg.style.removeProperty('--mouse-y');
    });

    // Add interactive glow via CSS
    const style = document.createElement('style');
    style.textContent = `
      .hero-card__bg::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
        background: radial-gradient(
          600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
          rgba(245, 200, 66, 0.06) 0%,
          transparent 50%
        );
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
      }
      .hero-card:hover .hero-card__bg::before {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  }

  // -------- ENTRANCE ANIMATION --------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-entered');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Add entrance styles
  const entranceStyle = document.createElement('style');
  entranceStyle.textContent = `
    .hero-card {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                  transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .hero-card.is-entered {
      opacity: 1;
      transform: translateY(0);
    }
    .hero-card__title {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s,
                  transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s;
    }
    .hero-card.is-entered .hero-card__title {
      opacity: 1;
      transform: translateY(0);
    }
    .hero-card__content {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s ease 0.35s,
                  transform 0.7s ease 0.35s;
    }
    .hero-card.is-entered .hero-card__content {
      opacity: 1;
      transform: translateY(0);
    }
    .hero-card__corner {
      opacity: 0;
      transition: opacity 0.5s ease 0.5s;
    }
    .hero-card.is-entered .hero-card__corner {
      opacity: 1;
    }
    @media (prefers-reduced-motion: reduce) {
      .hero-card,
      .hero-card__title,
      .hero-card__content,
      .hero-card__corner {
        opacity: 1 !important;
        transform: none !important;
        transition: none !important;
      }
    }
  `;
  document.head.appendChild(entranceStyle);

  observer.observe(card);

});

