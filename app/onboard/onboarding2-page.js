const { Frame } = require("@nativescript/core");

exports.onNavigateToOnboard3 = function () {
    Frame.topmost().navigate({
        moduleName: "onboard/onboarding3-page",
        clearHistory: true
    });
};

exports.onPageLoaded = function () {
    console.log("Onboarding 2 loaded");
};
