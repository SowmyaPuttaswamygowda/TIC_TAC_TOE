import { boxes } from '../dom.js';
import { checkWinner } from '../handlers/checkWinner.js';
import { gameDraw } from '../handlers/gameDraw.js';

let turnO = true;
let count = 0;

boxes.forEach((box, index) => {
    box.addEventListener('click', () => handleClick(box, index));
});

const handleClick = (box, index) => {
    if (box.disabled) return;

    box.innerText = turnO ? 'O' : 'X';
    turnO = !turnO;
    box.disabled = true;
    count++;

    if (checkWinner()) {
        return;
    }

    if (count === 9) {
        gameDraw();
    }
};

export const resetTurnAndCount = () => {
    turnO = true;
    count = 0;
};
