
const { Frame } = require("@nativescript/core");

exports.LoginPage = function () {
    Frame.topmost().navigate({
        moduleName: "auth/login-page",
        clearHistory: true
    });
};
