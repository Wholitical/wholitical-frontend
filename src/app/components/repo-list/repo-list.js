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
var github_1 = require('../../services/github');
var router_deprecated_1 = require('@angular/router-deprecated');
var RepoList = (function () {
    function RepoList(github, params) {
        this.github = github;
        this.params = params;
    }
    RepoList.prototype.ngOnInit = function () {
        this.repos = this.github.getReposForOrg(this.params.get('org'));
    };
    RepoList = __decorate([
        core_1.Component({
            selector: 'repo-list',
            templateUrl: 'app/components/repo-list/repo-list.html',
            styleUrls: ['app/components/repo-list/repo-list.css'],
            providers: [],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            pipes: []
        }), 
        __metadata('design:paramtypes', [github_1.Github, (typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object])
    ], RepoList);
    return RepoList;
    var _a;
}());
exports.RepoList = RepoList;
