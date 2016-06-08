"use strict";
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var seed_app_1 = require('./app/seed-app');
// enableProdMode()
platform_browser_dynamic_1.bootstrap(seed_app_1.SeedApp, [
    http_1.HTTP_PROVIDERS,
    router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
])
    .catch(function (err) { return console.error(err); });
