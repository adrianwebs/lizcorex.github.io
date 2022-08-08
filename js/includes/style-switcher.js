/*

Script  : Style Switcher
Version : 1.0
Author  : Surjith S M
URI     : http://themeforest.net/user/surjithctly

Copyright © All rights Reserved
Surjith S M / @surjithctly

*/


var styleSwitchCSS = `
.color-picker{
    position:fixed;
    left:0;top:50%;
    margin-top:-175px;
    z-index:10
}
@media (max-width:767px){
    .color-picker{
        display:none
    }
}
.color-picker a{
    display:block;
    position:relative;
    height:50px;
    width:150px;
    padding:20px;
    margin-left:-130px
}
.color-picker a.selected,.color-picker a:hover{
    margin-left:0px
}
.color-picker a.selected:before{
    background:#fff;
    opacity:1;
    -webkit-box-shadow:0 1px 0 0 rgba(50,50,50,.25);
    -moz-box-shadow:0 1px 0 0 rgba(50,50,50,.25);
    box-shadow:0 1px 0 0 rgba(50,50,50,.25)
}
.color_white{background:#dddddd}
.color_white a{text-color: #000 !important}
.color_blue{background:#0084ff}
.color_blue a{text-color: #fff !important}
.color_yellow{background:#ffd700}
.color_yellow a{text-color: #fff !important}
.color_green{background:#2FCA2D}
.color_green a{text-color: #fff !important}
.color_orange{background:#f62}
.color_orange a{text-color: #fff !important}
.color_red{background:#FF1900}
.color_red a{text-color: #fff !important}
.color_violet{background:#9300FF}
.color_violet a{text-color: #fff !important}
`;

var styleSwitchStylesheets = '<link rel="alternate stylesheet" title="blue-orange" media="screen" href="css/themes/blue-orange.css"><link rel="alternate stylesheet" title="cyan-red" media="screen" href="css/themes/cyan-red.css"><link rel="alternate stylesheet" title="green-violet" media="screen" href="css/themes/green-violet.css"><link rel="alternate stylesheet" title="orange-blue" media="screen" href="css/themes/orange-blue.css"><link rel="alternate stylesheet" title="red-green" media="screen" href="css/themes/red-green.css"><link rel="alternate stylesheet" title="teal-magenta" media="screen" href="css/themes/teal-magenta.css"><link rel="alternate stylesheet" title="violet-green" media="screen" href="css/themes/violet-green.css">';



var styleSwitchHTML = `
<div class="color-picker" dir="ltr">
    <a href="javascript:void(0);" class="color_white">Grados 1-2-3</a> 
    <a href="javascript:void(0);" class="color_yellow">Grados 4-5-6</a> 
    <a href="javascript:void(0);" class="color_green">Grados 7-8-9</a> 
    <a href="javascript:void(0);" class="color_blue">Grados 10-11-12</a> 
    <a href="javascript:void(0);" class="color_red">Grados 13-14-15</a> 
    <a href="javascript:void(0);" class="color_violet">Grados 16-17-18</a> 
</div>`;

$(styleSwitchHTML).appendTo("body");

$(styleSwitchStylesheets).appendTo("head");

$('<style type="text/css"> ' + styleSwitchCSS + ' </style>').appendTo("body");




function setActiveStyleSheet(title) {
    var i, a, main;
    for (i = 0;
        (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;
            if (a.getAttribute("title") == title) a.disabled = false;
        }
    }
}

function getActiveStyleSheet() {
    var i, a;
    for (i = 0;
        (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
    }
    return null;
}

function getPreferredStyleSheet() {
    var i, a;
    for (i = 0;
        (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) return a.getAttribute("title");
    }
    return null;
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = function(e) {
    var cookie = readCookie("style");
    var title = cookie ? cookie : getPreferredStyleSheet();
    setActiveStyleSheet(title);

    if (title != 'null') {
        $('.color-settings a').removeClass("selected");
        $('.color-settings .color_' + title).addClass("selected");
    }
}

window.onunload = function(e) {
    var title = getActiveStyleSheet();
    createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);
