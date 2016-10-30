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
/**
 * Created by yangxu on 16-10-30.
 */
var core_1 = require('@angular/core');
var hero_service_1 = require("./hero.service");
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
        this.heroService = heroService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n\n        <h2>My Heroes</h2>\n        <ul class=\"heroes\">\n            <li *ngFor=\"let hero of heroes\" [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n                <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n            </li>\n        </ul>\n        \n        <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    ",
            providers: [hero_service_1.HeroService],
            styles: [" .selected { background-color: #CFD8DC !important; color: white; } .heroes { margin: 0 0 2em 0; list-style-type: none; padding: 0; width: 15em; } .heroes li { cursor: pointer; position: relative; left: 0; background-color: #EEE; margin: .5em; padding: .3em 0; height: 1.6em; border-radius: 4px; } .heroes li.selected:hover { background-color: #BBD8DC !important; color: white; } .heroes li:hover { color: #607D8B; background-color: #DDD; left: .1em; } .heroes .text { position: relative; top: -3px; } .heroes .badge { display: inline-block; font-size: small; color: white; padding: 0.8em 0.7em 0 0.7em; background-color: #607D8B; line-height: 1em; position: relative; left: -1px; top: -4px; height: 1.8em; margin-right: .8em; border-radius: 4px 0 0 4px; } "]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map