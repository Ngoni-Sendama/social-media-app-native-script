const { Frame } = require('@nativescript/core');

exports.onNavigateToOnboard2 = function () {
  Frame.topmost().navigate({
    moduleName: "onboard/onboarding2-page",
    clearHistory: true,      // Removes the back button
    animated: true,          // Enables transition animation
    transition: {
      name: "slide",         // Options: "fade", "slide", "flip", "curl", etc.
      duration: 300,         // Smooth speed in ms
      curve: "easeInOut"     // Smooth easing
    }
  });
};
