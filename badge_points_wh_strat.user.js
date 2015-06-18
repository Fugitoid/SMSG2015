// ==UserScript==
// @name Fugitoid's SMSG2015 Badge Points buyer
// @namespace https://github.com/Fugitoid/SMSG2015
// @version 2.2
// @match *://steamcommunity.com/minigame/towerattack*
// @match *://steamcommunity.com//minigame/towerattack*
// @grant none
// @updateURL https://raw.githubusercontent.com/Fugitoid/SMSG2015/master/badge_points_wh_strat.user.js
// @downloadURL https://raw.githubusercontent.com/Fugitoid/SMSG2015/master/badge_points_wh_strat.user.js
// ==/UserScript==

// Badge Item Costs
//-------------------
// Like New = 100
// Wormhole = 100
// Crit = 10
// Raining Gold = 10


/** Check periodicaly if the welcome panel is visible
 * then trigger an event 'event:welcomePanelVisible' */
function waitForWelcomePanelLoad() {
	var checkTicks = 20; // not very elegant but effective
	var waitForWelcomePanelInterval = setInterval(function() {
		var $welcomePanel = w.$J('.spend_badge_ponts_ctn');
		var panelReady = !!($welcomePanel && $welcomePanel.length && $welcomePanel.is(':visible'));

		if(panelReady) { // Got it! Tuning time!
			window.document.dispatchEvent(new Event('event:welcomePanelVisible'));
			clearInterval(waitForWelcomePanelInterval);
		}
		else if(w.g_Minigame && w.g_Minigame.CurrentScene() && w.g_Minigame.CurrentScene().m_rgPlayerTechTree
				&& !w.g_Minigame.CurrentScene().m_rgPlayerTechTree.badge_points) { // techtree but no points
			clearInterval(waitForWelcomePanelInterval);
		}
		else if(--checkTicks <= 0) { // give up
			clearInterval(waitForWelcomePanelInterval);
		}
	}, 500);
}

waitForWelcomePanelLoad();

// Buy 1 LN per 50 WH until around 100 badge points left
while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points > 100) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_26,50);
	g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_27,1);
}

// Max out Raining Gold
while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points > 10) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_17,1);
}

// Treasure for what's left over
while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points > 1) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_22,1);
}

// Pumped Up if there's 1 point left
g_Minigame.m_CurrentScene.TrySpendBadgePoints(purchase_abilityitem_19,1);
