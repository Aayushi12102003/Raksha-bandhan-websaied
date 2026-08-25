/* =========================
   SURPRISE BUTTON
========================= */

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseSection = document.getElementById("surpriseSection");

surpriseBtn.addEventListener("click", () => {

    surpriseSection.classList.add("show");

    surpriseSection.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();
});


/* =========================
   FLOATING PARTICLES
========================= */

const particlesContainer = document.querySelector(".particles");

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity =
        Math.random();

    const size =
        2 + Math.random() * 4;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particlesContainer.appendChild(particle);
}


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 40; i++) {

        const confetti =
            document.createElement("div");

        confetti.innerHTML =
            ["✨", "❤️", "🌸", "🪢"][Math.floor(Math.random() * 4)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex = "100";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const animation =
            confetti.animate(
                [
                    {
                        transform: "translateY(0) rotate(0deg)",
                        opacity: 1
                    },
                    {
                        transform:
                            `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        2500 + Math.random() * 2500,

                    easing: "ease-out"
                }
            );

        animation.onfinish = () => {
            confetti.remove();
        };
    }
}


/* =========================
   MUSIC BUTTON
========================= */

const musicBtn =
    document.getElementById("musicBtn");

const music =
    document.getElementById("music");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!music.src) {

        alert(
            "Add your music file in index.html first 🎵"
        );

        return;
    }

    if (playing) {

        music.pause();

        musicBtn.innerHTML = "🎵";

        playing = false;

    } else {

        music.play();

        musicBtn.innerHTML = "⏸️";

        playing = true;
    }
});