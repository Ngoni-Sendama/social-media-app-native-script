
// const { Frame } = require("@nativescript/core");

// exports.HomePage = function () {
//     Frame.topmost().navigate({
//         moduleName: "home-page",
//         clearHistory: true
//     });
// };


// exports.RegisterPage = function () {
//     Frame.topmost().navigate("auth/register-page");
//     Frame.topmost().navigate({
//         moduleName: "auth/register-page",
//         clearHistory: true
//     });
// };
const { Application } = require("@nativescript/core");

exports.HomePage = function () {
    console.log("Navigating to Home Page...");
    Application.resetRootView({
        moduleName: "home-page"
    });
};

exports.RegisterPage = function () {
    console.log("Navigating to Register Page...");
    Application.resetRootView({
        moduleName: "auth/register-page"
    });
};
