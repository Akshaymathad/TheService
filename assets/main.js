document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // 2. Scroll Animations (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // 3. Privacy-First Local Analytics (Zero Dependency)
    // Stores visit count in localStorage only. No external requests.
    try {
        const key = 'theservice_visits';
        const visits = parseInt(localStorage.getItem(key) || '0');
        localStorage.setItem(key, visits + 1);
        console.log(`Local Analytics: You have visited this site ${visits + 1} times.`);

        // Optional: If you had a self-hosted GoatCounter, you would uncomment this:
        // const img = new Image();
        // img.src = 'https://analytics.yourdomain.com/count?p=' + location.pathname;
    } catch (e) {
        // Ignore errors (e.g. private mode)
    }
});
