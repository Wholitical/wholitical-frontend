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
var repo_list_1 = require('../repo-list/repo-list');
var repo_detail_1 = require('../repo-detail/repo-detail');
var github_1 = require('../../services/github');
var RepoBrowser = (function () {
    function RepoBrowser(router, github) {
        this.router = router;
        this.github = github;
    }
    RepoBrowser.prototype.searchForOrg = function (orgName) {
        var _this = this;
        this.github.getOrg(orgName)
            .subscribe(function (_a) {
            var name = _a.name;
            console.log(name);
            _this.router.navigate(['RepoList', { org: orgName }]);
        });
    };
    RepoBrowser = __decorate([
        core_1.Component({
            selector: 'repo-browser',
            templateUrl: 'app/components/repo-browser/repo-browser.html',
            styleUrls: ['app/components/repo-browser/repo-browser.css'],
            providers: [github_1.Github],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            pipes: []
        }),
        router_deprecated_1.RouteConfig([
            { path: '/:org', component: repo_list_1.RepoList, name: 'RepoList' },
            { path: '/:org/:name', component: repo_detail_1.RepoDetail, name: 'RepoDetail' },
        ]), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object, github_1.Github])
    ], RepoBrowser);
    return RepoBrowser;
    var _a;
}());
exports.RepoBrowser = RepoBrowser;
