
const { Frame } = require("@nativescript/core");

exports.onNavigateToHome = function() {
       Frame.topmost().navigate({
        moduleName: "auth/login-page",
        clearHistory: true
    });
};
