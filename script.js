document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    const burger = document.querySelector('.burger');
    const drawer = document.getElementById('drawer');
    const closeBtn = drawer.querySelector('.close');
    burger.addEventListener('click', () => drawer.classList.add('open'));
    closeBtn.addEventListener('click', () => drawer.classList.remove('open'));
    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => drawer.classList.remove('open'));
    });
});
