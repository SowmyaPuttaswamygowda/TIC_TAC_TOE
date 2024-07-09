import { boxes } from '../dom.js';

export const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = '';
    });
};
