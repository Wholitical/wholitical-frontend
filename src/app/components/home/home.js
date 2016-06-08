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
var Home = (function () {
    function Home(router) {
        this.router = router;
    }
    Home.prototype.findMyCandidates = function (zipForm) {
        this.router.navigate(['Candidates', { zip: zipForm }]);
    };
    Home.prototype.ngOnInit = function () {
    };
    Home = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/components/home/home.html',
            styleUrls: ['app/components/home/home.css'],
            directives: [],
            pipes: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object])
    ], Home);
    return Home;
    var _a;
}());
exports.Home = Home;
