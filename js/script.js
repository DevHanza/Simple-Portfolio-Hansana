// Let's play a game - Section

let gameForm = document.getElementById("gameForm");

gameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let userAge = document.getElementById("userAge");
    let gameResult = document.querySelector(".gameResult");
    let gameResultHeader = document.querySelector("#gameResult h3");


    let todayDate = new Date();
    let myDOB = new Date("2005-01-21");
    let myAge = todayDate.getFullYear() - myDOB.getFullYear();


    function calAgeDiff(myAge, userAge) {
        if (myAge > userAge) {
            return myAge - userAge;

        } else if (userAge > myAge) {
            return userAge - myAge;
        };
    }

    if (myAge > userAge.value) {
        gameResultHeader.innerHTML = `You're ${calAgeDiff(myAge, userAge.value)} years younger than me. 👶`;

    } else if (userAge.value > myAge) {
        gameResultHeader.innerHTML = `You're ${calAgeDiff(myAge, userAge.value)} years older than me. 🧓`;

    } else if (userAge.value == myAge) {
        gameResultHeader.innerHTML = "Hooray! We are both the same age. 😃🙌";

    } else {
        gameResultHeader.innerHTML = "Something went wrong! 🤷‍♂️";

    };


    gameResult.classList.remove('hidden');
    setTimeout(() => {
        gameResult.classList.add('show');
    }, 1); // 1ms

});

// Loading Animation

function loadingAnimation(selector, side) {

    window.addEventListener('load', function () {
        const section = document.querySelector(selector);
        section.classList.add('slide-' + side + '-show');
        section.classList.remove('slide-' + side + '-hidden');
    });
};

loadingAnimation("#header .header-left", "left");
loadingAnimation("#header .header-right", "right");




