// =======================
// NAVIGATION
// =======================

const navButtons =
document.querySelectorAll(".nav-btn");

const pages =
document.querySelectorAll(".page");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        navButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        pages.forEach(page =>
            page.classList.remove("active-page")
        );

        button.classList.add("active");

        const section =
        button.dataset.section;

        document
            .getElementById(section)
            .classList.add(
                "active-page"
            );
    });

});


// =======================
// LOGIN
// =======================

const unlockBtn =
document.getElementById(
    "unlockBtn"
);

unlockBtn.addEventListener(
    "click",
    unlockGarden
);

function unlockGarden(){

    const password =
    document.getElementById(
        "password"
    ).value;

    if(!password){

        alert(
            "Enter the secret phrase 🌹"
        );

        return;
    }

    showLoading();

    setTimeout(() => {

        hideLoading();

        document
            .getElementById(
                "loginScreen"
            )
            .style.display =
            "none";

        document
            .getElementById(
                "app"
            )
            .classList.remove(
                "hidden"
            );

        heartBurst();

    },1500);
}


// =======================
// LOADING
// =======================

function showLoading(){

    document
    .getElementById(
        "loadingOverlay"
    )
    .classList.remove(
        "hidden"
    );
}

function hideLoading(){

    document
    .getElementById(
        "loadingOverlay"
    )
    .classList.add(
        "hidden"
    );
}


// =======================
// HEART BURST
// =======================

function heartBurst(){

    for(let i=0;i<20;i++){

        const heart =
        document.createElement(
            "div"
        );

        heart.innerHTML =
        "❤️";

        heart.style.position =
        "fixed";

        heart.style.left =
        Math.random()*100+"vw";

        heart.style.top =
        "100vh";

        heart.style.fontSize =
        (20+Math.random()*30)
        +"px";

        heart.style.zIndex =
        "999";

        heart.style.pointerEvents =
        "none";

        document.body.appendChild(
            heart
        );

        heart.animate(

            [
                {
                    transform:
                    "translateY(0)"
                },

                {
                    transform:
                    "translateY(-120vh)"
                }

            ],

            {
                duration:
                3000+
                Math.random()*2000
            }

        );

        setTimeout(
            () => heart.remove(),
            5000
        );
    }
}


// =======================
// FLOWER EASTER EGG
// =======================

let flowerClicks = 0;

document.addEventListener(
    "click",
    event => {

        if(
            event.target.textContent
            .includes("🌹")
        ){

            flowerClicks++;

            if(
                flowerClicks >= 10
            ){

                alert(
                    "🌸 Secret Message 🌸\n\nYou are my favorite person."
                );

                flowerClicks = 0;
            }
        }
    }
);


// =======================
// RANDOM QUOTES
// =======================

const quotes = [

    "Every memory here carries a heartbeat.",

    "You are my favorite chapter.",

    "Some flowers bloom only once, but you bloom every day.",

    "I still smile when I think of you.",

    "The garden grows because of you."

];

const quoteCard =
document.querySelector(
    ".quote-card"
);

if(quoteCard){

    quoteCard.textContent =
    quotes[
        Math.floor(
            Math.random()
            * quotes.length
        )
    ];
}
const footerQuotes = [

    "Every memory here carries a heartbeat.",

    "You are my favorite chapter.",

    "The garden grows because of you.",

    "Some flowers bloom only once, but you bloom every day.",

    "I still smile when I think of you.",

    "A thousand places, and I'd still choose you.",

    "Home is wherever you are.",

    "The best days somehow involve you.",

    "You turned ordinary moments into memories.",

    "If this garden blooms, it's because of you."
];

const footer =
document.getElementById(
    "footerQuote"
);

if(footer){

    footer.textContent =
    footerQuotes[
        Math.floor(
            Math.random()
            * footerQuotes.length
        )
    ];
}
const anniversary =
new Date("2026-02-14");

const today =
new Date();

const difference =
today - anniversary;

const days =
Math.floor(
    difference /
    (1000 * 60 * 60 * 24)
);

const counter =
document.getElementById(
    "daysTogether"
);

if(counter){

    counter.textContent =
    days;
}