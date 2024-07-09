import { msg, msgContainer } from '../dom.js';
import { disableBoxes } from '../components/disableBoxes.js';

export const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner} 🥳`;
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
    msgContainer.classList.remove('hide');
    disableBoxes();
};
