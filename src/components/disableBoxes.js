import { boxes } from '../dom.js';

export const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};
