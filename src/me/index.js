

import {user} from '../_generals/userLoad.js';
import '../_generals/theme.js';
import '../_generals/showcase.js';
import'../_generals/menu.js';

//CSS
import '../_generals/colors.scss';
import '../_generals/huff.scss';
import './me.scss';
import '../_generals/options.scss';
import '../_generals/scrollbar.scss';
import '../_generals/showcase.scss';
import '../_generals/videoPlayer.scss';
import '../_generals/menu.scss';
import '../_generals/fonts.scss';


//CODE
document.head.getElementsByTagName("title")[0].innerText = user.username + " | Capybara";
