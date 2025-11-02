const { Frame } = require('@nativescript/core');

exports.onNavigateToOnboard2 = function () {
  Frame.topmost().navigate({
    moduleName: "onboard/onboarding2-page",
    clearHistory: true
  });
};


