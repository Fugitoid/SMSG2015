//Buy 1 LN per 100 WH until can't anymore
while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points > 5300) {
	for (var i = 0; i < 100; i++) {
		g_Minigame.m_CurrentScene.TrySpendBadgePoints($J('#purchase_abilityitem_26'));
	}
	g_Minigame.m_CurrentScene.TrySpendBadgePoints($J('#purchase_abilityitem_27'));
}
//Buy 500 Raining Gold
for (var i = 0; i < 500; i++) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints($J('#purchase_abilityitem_17'));
}
//Buy 30 Crit
for (var i = 0; i < 30; i++) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints($J('#purchase_abilityitem_18'));
}
//Max out WH
while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points > 100) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints($J('#purchase_abilityitem_26'));
}
//Max out Raining Gold
while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points >= 10) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints($J('#purchase_abilityitem_17'));
}
//Treasure for what's left over
while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points >= 2) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints($J('#purchase_abilityitem_22'));
}
//Pumped Up if there's 1 point left
while (g_Minigame.m_CurrentScene.m_rgPlayerTechTree.badge_points == 1) {
	g_Minigame.m_CurrentScene.TrySpendBadgePoints($J('#purchase_abilityitem_19'));
}
