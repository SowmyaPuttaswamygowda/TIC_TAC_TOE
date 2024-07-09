import { resetBtn, newGameBtn } from '../dom.js';
import { resetGame } from '../events/resetGame.js';
import { resetGame as newGame } from '../events/newGame.js';
import '../events/boxClick.js';

resetBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', newGame);
