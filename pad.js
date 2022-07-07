function createPad(gameBoard) {
    const pad = document.createElement("div");
    pad.classList.add("pad");
    gameBoard.appendChild(pad);
}


export let hasSpaceBeenPressed = {ball:false}

function movePadAndBall() {


    window.addEventListener("keydown", function (e) {

        if (e.code === 'Space') hasSpaceBeenPressed.ball = true 

        let pad = document.querySelector(".pad");
        let ball = document.querySelector(".ball")
        let padStyle = window.getComputedStyle(pad)
        let ballStyle = window.getComputedStyle(ball)
        let padStart = parseInt(padStyle.gridColumnStart)
        let padEnd = parseInt(padStyle.gridColumnEnd)
        let ballStart = parseInt(ballStyle.gridColumnStart)

        if (e.key === "ArrowRight" && padStart < 19 && !hasSpaceBeenPressed.ball) {
            pad.style.gridColumnStart = padStart + 1;
            pad.style.gridColumnEnd = padEnd + 1;
            ball.style.gridColumnStart = ballStart + 1
        } else if (e.key === "ArrowRight" && padStart < 19) {
            pad.style.gridColumnStart = padStart + 1;
            pad.style.gridColumnEnd = padEnd + 1;
        }

        if (e.key === "ArrowLeft" && padEnd > 6 && !hasSpaceBeenPressed.ball) {
            pad.style.gridColumnStart = padStart - 1;
            pad.style.gridColumnEnd = padEnd - 1;
            ball.style.gridColumnStart = ballStart - 1
        } else if (e.key === "ArrowLeft" && padEnd > 6) {
            pad.style.gridColumnStart = padStart - 1;
            pad.style.gridColumnEnd = padEnd - 1;
        }
    });

    // grid-column-start: 10; /*x*/
    // grid-column-end: 15;
}

export { createPad, movePadAndBall };
