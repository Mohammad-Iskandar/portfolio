document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-trigger');
    const mobileMenu = document.querySelector('.mobile-overlay');
    const closeButton = document.querySelector('.mobile-close');
    if (menuButton) {
        menuButton.addEventListener('click', function () {
            mobileMenu.classList.add('active');
        });
    }
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
        });
    }
    if (mobileMenu) {
        window.addEventListener('click', function (e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        });
    }
    const menuLinks = document.querySelectorAll('.mobile-overlay a[href^="#"]');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                mobileMenu.classList.remove('active');
            }
        });
    });
});
//Slide up animation for paragraph
document.querySelectorAll('.box .info a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const box = e.target.closest('.box');
        const paragraph = box.querySelector('p');
        paragraph.classList.remove('animate-slide');
        void paragraph.offsetWidth;
        paragraph.classList.add('animate-slide');
    });
});

//

document.addEventListener('DOMContentLoaded', () => 
{
    const elements = document.querySelectorAll('.box');
    const observer = new IntersectionObserver
    ((entries, observer) => 
        {
            entries.forEach(entry => {
                if (entry.isIntersecting) 
                {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, 
        { threshold: 0.1 }
    );
    elements.forEach(element => 
        {
            observer.observe(element);
        }
    );
}
);

//

const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hidden');

    const animationClasses = entry.target.dataset.animation;
    if (animationClasses) {
        entry.target.classList.add(...animationClasses.split(' '));
    }

    observer.unobserve(entry.target); 
    }
});
}, {
threshold: 0.2
});

boxes.forEach(box => observer.observe(box));

//change active class while scrolling
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll("ul.links a[href^='#'], ul.mobile-list a[href^='#']");
const observer = new IntersectionObserver(
    (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
navLinks.forEach((link) => {
    link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
    
            }
        });
        }
    });
    },
    {
        threshold: 0.1,
    }
    );
    sections.forEach((section) => {
    observer.observe(section);
    });
});

