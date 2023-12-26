



//JS
import { loadTheme } from '../_generals/theme.js';

//CSS

import './login.scss';
import "../_generals/fonts.scss";


//vars






//Req parser
document.getElementById("themeSwitch").onclick = () => { return loadTheme(document.documentElement.getAttribute('theme') == 'light' ? 'dark' : 'light')};









