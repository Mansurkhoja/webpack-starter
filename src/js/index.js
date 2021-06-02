//html
import html from '../index.html';
//styles
import '../styles/main.scss';
//images
// import visaLogo from '../assets/img/visa.png';
//data
//import json from '../assets/data/rates_old.json';
//js
import * as $ from 'jquery';

function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(require.context('../img/icons/', true, /\.svg$/));

// import s from './s.js';

//MAIN JS
// console.log(json);
'use strict'
// document.addEventListener('DOMContentLoaded', function () {
// 	alert(22);
// 	document.querySelector('.visa').classList.add('s')
// });
document.onload = function name(params) {
	alert(2);
	document.body.classList.add('sq');
	document.addEventListener('DOMContentLoaded', function () {
			alert(22);
			document.querySelector('.visa').classList.add('s')
		});
};
document.body.classList.add('s');
