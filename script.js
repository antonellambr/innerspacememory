const levelCards = document.querySelectorAll(".level-card");
const btnProfile = document.getElementById("profile-btn");
const modalProfile = document.getElementById("profile-modal");
const home = document.getElementById("home");
const game = document.getElementById("game");
const navHome = document.getElementById("nav-home");
const resultModal = document.getElementById("result-modal");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const playAgainBtn = document.getElementById("play-again-btn");
const homeBtn = document.getElementById("home-btn");

let selectedLevel = null;

let flippedCards = [];

const timer = document.getElementById("timer");
const level = document.getElementById("level");

let gameHistory = JSON.parse(localStorage.getItem("gameHistory")) || [];

const gameState = {
    level: null,
    state: "inactive",
    paused: false
}

const gameLevel = {
    easy: {cards: 6, time: 20},
    medium: {cards: 12, time: 40},
    hard: {cards: 18, time: 60}
}

function updateView() {
    if (gameState.state === "active") {
        home.classList.add("hidden");
        game.classList.remove("hidden");
    } else {
        home.classList.remove("hidden");
        game.classList.add("hidden");
    }
}

levelCards.forEach(card => {
    card.addEventListener("click", () => {
        gameState.level = card.dataset.level;
        gameState.state = "active";
        game.classList.remove("easy", "medium", "hard");
        game.classList.add(gameState.level);
        levelCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
        updateView();
        level.textContent = card.dataset.level;
        const cardsNum = gameLevel[gameState.level].cards;
        createCouples(cardsNum);
        startTimer();
    });
});

function shuffleArray(arr) {
    const shuffled = [...arr];
    shuffled.sort(() => Math.random() - 0.5);
    return shuffled;
}

function createCouples(numCards) {
    const couple = numCards / 2;

    const id = [];
    for (i = 0; i < couple; i++) {
        id[i] = i+1;
    }
    const cardsArray = [];
    for (i = 0; i < id.length; i++) {
        cardsArray.push(id[i]);
        cardsArray.push(id[i]);
    }
    const shuffled = shuffleArray(cardsArray);
    renderCards(shuffled);
}

function renderCards(arr) {
    game.querySelectorAll(".card").forEach(card => card.remove());
    arr.forEach(card => {
        const c = document.createElement("div");
        c.dataset.value = card;
        c.classList.add("card");

        c.addEventListener("click", () => {
            if (gameState.state === "inactive") {
                return;
            }
            if (flippedCards.length === 2) {
                return;
            }
            if (c.classList.contains("flipped")) {
                return;
            }
            c.classList.add("flipped");
            flippedCards.push(c);
            if (flippedCards.length === 2) {
                if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
                    flippedCards[0].classList.add("matched");
                    flippedCards[1].classList.add("matched");
                    flippedCards = [];
                    setTimeout(() => checkWin(), 500);
                } else {
                    setTimeout(() => {
                        flippedCards[0].classList.remove("flipped");
                        flippedCards[1].classList.remove("flipped");
                        flippedCards = [];
                    }, 1000);
                }
            } 
        });

        game.appendChild(c);
    })
}

function checkWin() {
    const matchedCards = document.querySelectorAll(".card.matched");
    const cards = document.querySelectorAll(".card");
    if (matchedCards.length === cards.length) {
        clearInterval(timerId);
        showResult(true);
    }
}

let timerId = null;
function startTimer() {
    if (timerId) {
        clearInterval(timerId);
    }
    let timeLeft = gameLevel[gameState.level].time;
    timer.textContent = timeLeft;
    timerId = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerId);
            showResult(false);
        }
    }, 1000);
}

function showResult(win) {
    gameState.state = "inactive";
    if (win) {
        resultTitle.textContent = "Hai vinto!";
    } else {
        resultTitle.textContent = "Tempo scaduto!";
    }
    resultModal.classList.remove("hidden");

    gameHistory.push({
        level: gameState.level,
        win: win,
        time: gameLevel[gameState.level].time - Number(timer.textContent)
    });
    localStorage.setItem("gameHistory", JSON.stringify(gameHistory));
}

playAgainBtn.addEventListener("click", () => {
    resultModal.classList.add("hidden");
    const cardsNum = gameLevel[gameState.level].cards;
    gameState.state = "active";
    createCouples(cardsNum);
    startTimer();
});

function goHome() {
    resultModal.classList.add("hidden");
    clearInterval(timerId);
    game.querySelectorAll(".card").forEach(card => card.remove());
    gameState.state = "inactive";
    level.textContent = "";
    updateView();
}
homeBtn.addEventListener("click", () => {
    goHome();
})
navHome.addEventListener("click", () => {
    goHome();
})

const closeProfileBtn = document.getElementById("close-profile");

btnProfile.addEventListener("click", () => {
    const { totalGames, wins, losts, time } = getStats();
    document.getElementById("stat-total").textContent = "Partite: " + totalGames;
    document.getElementById("stat-wins").textContent = "Vittorie: " + wins;
    document.getElementById("stat-losts").textContent = "Sconfitte: " + losts;
    document.getElementById("stat-time").textContent = "Tempo medio: " + Math.round(time) + "s";
    modalProfile.classList.remove("hidden");
    home.classList.add("hidden");
});

closeProfileBtn.addEventListener("click", () => {
    modalProfile.classList.add("hidden");
    home.classList.remove("hidden");
});

function getStats() {
    const dati = {
        totalGames: gameHistory.length,
        wins: gameHistory.filter(g => g.win === true).length,
        losts: gameHistory.filter(g => g.win === false).length,
        time: gameHistory.length > 0 ? gameHistory.reduce((acc, g) => acc + g.time, 0) / gameHistory.length : 0
    }
    return dati;
}
