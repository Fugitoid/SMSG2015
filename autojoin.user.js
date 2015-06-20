// ==UserScript==
// @name Steam Monster Summer Game 2015 Autojoin Script 
// @namespace https://github.com/Fugitoid/SMSG2015
// @description A script that automates joining a specific room for the Steam Monster Summer Game 2015 for you.
// @version 1.2.5
// @match *://steamcommunity.com/minigame/
// @match *://steamcommunity.com//minigame/
// @grant none
// @updateURL https://raw.githubusercontent.com/Fugitoid/SMSG2015/master/autojoin.user.js
// @downloadURL https://raw.githubusercontent.com/Fugitoid/SMSG2015/master/autojoin.user.js
// ==/UserScript==

/* Old code
g_gameId = "41671";
g_apiUrl = "http://steamapi-a.akamaihd.net/ITowerAttackMiniGameService/GetGameData/v0001/?gameid=" + g_gameId + "&include_stats=1";
g_intervalId = 0;

function success(data) {
    if (data.response.stats.num_players < 1500) {
        clearInterval(g_intervalId);
        JoinGame(g_gameId);
    }
}

g_intervalId = setInterval(function(){ jQuery.getJSON(g_apiUrl, success) }, 5);
*/


//javascript:setInterval(function(){JoinGame(#);$J('.btn_grey_white_innerfade').click();}, 1000); 


var randomTimeout = Math.floor(Math.random() * 7000) + 1000;
setInterval(function(){$J('.btn_grey_white_innerfade';console.log(randomTimeout);JoinGame(43);).click();}, randomTimeout); 