exports.onNavigatingTo = function () {
    console.log("Home Page loaded with bottom navigation");
};

const { Frame } = require('@nativescript/core');

exports.goHome = function () {
    Frame.topmost().navigate({
        moduleName: "home-page",
        clearHistory: true
    });
};

exports.goFeed = function () {
    Frame.topmost().navigate({
        moduleName: "tabs/feed-tab-page",
        clearHistory: true
    });
};

exports.goAddPost = function () {
    Frame.topmost().navigate({
        moduleName: "tabs/addpost-tab-page",
        clearHistory: true
    });
};

exports.goMessages = function () {
    Frame.topmost().navigate({
        moduleName: "tabs/message-tab-page",
        clearHistory: true
    });
};

exports.goProfile = function () {
    Frame.topmost().navigate({
        moduleName: "tabs/profile-tab-page",
        clearHistory: true
    });
};
