
const { Frame } = require("@nativescript/core");

exports.LoginPage = function () {
    Frame.topmost().navigate({
        moduleName: "auth/login-page",
        clearHistory: true
    });
};


exports.HomePage = function () {
    Frame.topmost().navigate({
        moduleName: "home-page",
        clearHistory: true
    });
};
