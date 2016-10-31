/**
 * Created by yangxu on 16-11-1.
 */

import {Component} from "@angular/core";
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'Tour of Heroes'
}