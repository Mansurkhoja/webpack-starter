//html
import '../index.html';
//styles
import '../styles/main.scss';
//images
import visaLogo from '../assets/img/visa.png';
//data
import json from '../assets/data/rates_old.json';
//js
import * as $ from 'jquery';
import Post from './Post.js';

//MAIN JS
const post = new Post('post title', visaLogo);
$('.post').html(post.toString());
// console.log('Post to String:', post.toString());
// console.log(document.querySelector('h1'));
// console.log(json);
