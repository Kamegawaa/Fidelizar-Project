document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector(".fidelity-gallery__carrossel");
    const imagens = document.querySelectorAll(".fidelity-gallery__img");
    const btnPrev = document.querySelector(".fidelity-gallery__btn1");
    const btnNext = document.querySelector(".fidelity-gallery__btn2");

    let index = 0;
    let isCooldown = false;

    function atualizarCarrossel() {
        imagens.forEach((img, i) => {
            img.classList.remove("center", "left", "right", "hidden");

            if (i === index) {
                img.classList.add("center");
            } else if (i === (index - 1 + imagens.length) % imagens.length) {
                img.classList.add("left");
            } else if (i === (index + 1) % imagens.length) {
                img.classList.add("right");
            } else {
                img.classList.add("hidden");
            }
        });
    }

    function handleButtonClick(direction) {
        if (isCooldown) return;

        isCooldown = true;

        if (direction === 'next') {
            index = (index + 1) % imagens.length;
        } else {
            index = (index - 1 + imagens.length) % imagens.length;
        }

        atualizarCarrossel();

        setTimeout(() => {
            isCooldown = false;
        }, 450);
    }

    btnNext.addEventListener("click", () => handleButtonClick('next'));
    btnPrev.addEventListener("click", () => handleButtonClick('prev'));

    atualizarCarrossel();

    const elements = document.querySelectorAll(".fidelity-staps-grup__layout, .fidelity-indication, .fidelity-function, .fidelity-points-grup__box1, .fidelity-points-grup__box2, .fidelity-points-grup__box3, .fidelity-reward-grup__card, .fidelity-reward-grup__card-focus, .fidelity-club fidelity-gallery, .fidelity-extract, .fidelity-promotion");

    elements.forEach((el) => el.classList.add("hidden"));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show"); // Remove ao sair da tela
            }
        });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));

});
