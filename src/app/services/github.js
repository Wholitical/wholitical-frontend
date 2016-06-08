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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Github = (function () {
    function Github(http) {
        this.http = http;
    }
    Github.prototype.getOrg = function (org) {
        return this.makeRequest("orgs/" + org);
    };
    Github.prototype.getReposForOrg = function (org) {
        return this.makeRequest("orgs/" + org + "/repos");
    };
    Github.prototype.getRepoForOrg = function (org, repo) {
        return this.makeRequest("repos/" + org + "/" + repo);
    };
    Github.prototype.makeRequest = function (path) {
        var params = new http_1.URLSearchParams();
        params.set('per_page', '100');
        var url = "https://api.github.com/" + path;
        return this.http.get(url, { search: params })
            .map(function (res) { return res.json(); });
    };
    Github = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], Github);
    return Github;
    var _a;
}());
exports.Github = Github;
