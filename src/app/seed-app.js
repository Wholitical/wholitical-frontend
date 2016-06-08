"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var home_1 = require('./components/home/home');
var about_1 = require('./components/about/about');
var repo_browser_1 = require('./components/repo-browser/repo-browser');
var candidates_1 = require('./components/candidates/candidates');
var SeedApp = (function () {
    function SeedApp() {
    }
    SeedApp = __decorate([
        core_1.Component({
            selector: 'wholitical',
            providers: [],
            pipes: [],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            templateUrl: 'app/seed-app.html',
        }),
        router_deprecated_1.RouteConfig([
            { path: '/home', component: home_1.Home, name: 'Home', useAsDefault: true },
            { path: '/about', component: about_1.About, name: 'About' },
            { path: '/candidates', component: candidates_1.Candidates, name: 'Candidates' },
            { path: '/github/...', component: repo_browser_1.RepoBrowser, name: 'RepoBrowser' },
        ]), 
        __metadata('design:paramtypes', [])
    ], SeedApp);
    return SeedApp;
}());
exports.SeedApp = SeedApp;
