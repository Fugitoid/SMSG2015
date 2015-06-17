// ==UserScript==
// @name Fugitoid's SMSG2015 Badge Points buyer
// @namespace https://github.com/Fugitoid/SMSG2015
// @version 2.0
// @match *://steamcommunity.com/minigame/towerattack*
// @match *://steamcommunity.com//minigame/towerattack*
// @grant none
// @updateURL https://raw.githubusercontent.com/Fugitoid/SMSG2015/master/badge_points.user.js
// @downloadURL https://raw.githubusercontent.com/Fugitoid/SMSG2015/master/badge_points.user.js
// ==/UserScript==

// Badge Item Costs
//-------------------
// Like New = 100
// Wormhole = 100
// Crit = 10
// Raining Gold = 10


// Buy 1 LN per 50 WH until can't anymore
while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points >= 50) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_26,50);
	g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_27,1);
}

// Buy 100 Raining Gold, not needed for WH strat
//g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_17,100);

// Buy 30 Crit, not needed for WH strat
//g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_18,30);

// Max out WH, not needed for WH strat
//while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points > 100) {
//	g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_26,1);
//}

// Max out Raining Gold
while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points >= 10) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_17,1);
}

// Treasure for what's left over
while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points >= 2) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_22,1);
}

// Pumped Up if there's 1 point left
g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_19,1);
