/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Application } from '@nativescript/core';

Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/

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
