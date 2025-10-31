const { Frame } = require('@nativescript/core');

exports.onNavigateToOnboard2 = function () {
  // Navigate to another page in the same folder
  Frame.topmost().navigate('onboard/onboarding2-page');
};
