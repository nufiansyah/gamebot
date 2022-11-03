function setUserAgent(userAgents) {
var newNavigator = {}, property;
for (property in navigator) {
newNavigator[ property ] = ( property != "userAgent") ? navigator[ property ] : newNavigator[ property ] = userAgents;
}
navigator = newNavigator;
}

setUserAgent("Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.5304.91 Mobile Safari/537.36");
