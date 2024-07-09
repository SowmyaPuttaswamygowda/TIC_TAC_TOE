import { enableBoxes } from '../components/enableBoxes.js';
import { msgContainer } from '../dom.js';
import { resetTurnAndCount } from './boxClick.js';

export const resetGame = () => {
    resetTurnAndCount();
    enableBoxes();
    msgContainer.classList.add('hide');
};
