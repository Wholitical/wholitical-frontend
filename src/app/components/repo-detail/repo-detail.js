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
var github_1 = require('../../services/github');
var RepoDetail = (function () {
    function RepoDetail(routeParams, github) {
        this.routeParams = routeParams;
        this.github = github;
        this.repoDetails = {};
    }
    RepoDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.github.getRepoForOrg(this.routeParams.get('org'), this.routeParams.get('name'))
            .subscribe(function (repoDetails) {
            _this.repoDetails = repoDetails;
        });
    };
    RepoDetail = __decorate([
        core_1.Component({
            selector: 'repo-detail',
            templateUrl: 'app/components/repo-detail/repo-detail.html',
            styleUrls: ['app/components/repo-detail/repo-detail.css'],
            providers: [],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            pipes: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object, github_1.Github])
    ], RepoDetail);
    return RepoDetail;
    var _a;
}());
exports.RepoDetail = RepoDetail;
