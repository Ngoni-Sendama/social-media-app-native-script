
const { Frame } = require('@nativescript/core');
exports.goMessages = function () {
    Frame.topmost().navigate({
        moduleName: "tabs/message-tab-page",
        clearHistory: true
    });
};