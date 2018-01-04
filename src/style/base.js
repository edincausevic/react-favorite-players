import { injectGlobal } from 'styled-components';
import { black, white, Clr1L, Clr3 } from './variables';

// services
import LightenDarkenColor from '../services/colorManipulation';

injectGlobal`
*, *:before, *:after {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

html,
body {
	color: ${black};
	background-color: ${white};
}

*:focus { outline: none; }
ul { list-style: none; }
a { text-decoration: none; }

.left { float: left; }
.right { float: right; }

.show { display: block; }
.hide { display: none!important; }

.success {
	background: ${Clr1L};
	&:hover {
		background: ${LightenDarkenColor(Clr1L, 20)};
	}
}

.danger {
	background: ${Clr3};
	&:hover {
		background: ${LightenDarkenColor(Clr3, 20)};
	}
}
`
