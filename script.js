const bilder = document.querySelectorAll(".galerie-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const counter = document.getElementById("lightbox-counter");

const closeBtn = document.querySelector(".lightbox-close");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

let aktuellesBild = 0;

function bildAnzeigen(index) {
    aktuellesBild = (index + bilder.length) % bilder.length;

    lightboxImg.src = bilder[aktuellesBild].src;
    lightboxImg.alt = bilder[aktuellesBild].alt;

    counter.textContent = (aktuellesBild + 1) + " / " + bilder.length;
    
    lightbox.style.display = "flex";
}

bilder.forEach((bild, index) => {
    bild.addEventListener("click", () => {
        bildAnzeigen(index);
    });
});

nextBtn.addEventListener("click", () => {
    bildAnzeigen(aktuellesBild + 1);
});

prevBtn.addEventListener("click", () => {
    bildAnzeigen(aktuellesBild - 1);
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {
            bildAnzeigen(aktuellesBild + 1);
        }

        if (e.key === "ArrowLeft") {
            bildAnzeigen(aktuellesBild - 1);
        }

        if (e.key === "Escape") {
            lightbox.style.display = "none";
        }

    }

});