
const { Frame } = require("@nativescript/core");

exports.HomePage = function () {
    Frame.topmost().navigate({
        moduleName: "home-page",
        clearHistory: true
    });
};


exports.RegisterPage = function () {
    Frame.topmost().navigate({
        moduleName: "auth/register-page",
        clearHistory: true
    });
};
