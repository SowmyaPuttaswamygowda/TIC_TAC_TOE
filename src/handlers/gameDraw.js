import { msg, msgContainer } from '../dom.js';
import { disableBoxes } from '../components/disableBoxes.js';

export const gameDraw = () => {
    msg.innerText = 'Game is Draw!.🦄🤞';
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
        emojis: ['🙂', '😂'],
    });
    msgContainer.classList.remove('hide');
    disableBoxes();
};
