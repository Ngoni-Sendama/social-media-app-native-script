const { Frame } = require("@nativescript/core");

exports.onNavigateToOnboard3 = function() {
    Frame.topmost().navigate("onboard/onboarding3-page");
};

exports.onPageLoaded = function() {
    console.log("Onboarding 2 loaded");
};
