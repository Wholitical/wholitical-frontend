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
var wholitical_service_1 = require('../../services/wholitical.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var Candidates = (function () {
    function Candidates(wholitical, params) {
        this.wholitical = wholitical;
        this.params = params;
    }
    Candidates.prototype.ngOnInit = function () {
        this.candidates = this.wholitical.getCandidatesByZip(this.params.get('zip'));
    };
    Candidates = __decorate([
        core_1.Component({
            selector: 'candidates',
            templateUrl: 'app/components/candidates/candidates.html',
            styleUrls: ['app/components/candidates/candidates.css'],
            providers: [wholitical_service_1.Wholitical],
            pipes: []
        }), 
        __metadata('design:paramtypes', [wholitical_service_1.Wholitical, (typeof (_a = typeof router_deprecated_1.RouteParams !== 'undefined' && router_deprecated_1.RouteParams) === 'function' && _a) || Object])
    ], Candidates);
    return Candidates;
    var _a;
}());
exports.Candidates = Candidates;
