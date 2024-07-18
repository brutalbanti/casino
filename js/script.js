document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scroll-down');
    const nextSection = document.getElementById('next-section');
    const cookiesSection = document.getElementById('cookiesSection');
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    const acceptBtn = document.querySelector('.cookies__accept-btn');
    const rejectBtn = document.querySelector('.cookies__reject-btn');
    if (scrollButton && nextSection) {
        scrollButton.addEventListener('click', () => {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    if (!cookiesAccepted) {
        cookiesSection.classList.add('active');
    }

    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', true);
        cookiesSection.classList.remove('active');
    });

    rejectBtn.addEventListener('click', function() {
        cookiesSection.classList.remove('active');
    });
});
