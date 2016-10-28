/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.css'],
    template: `
        <div class="wrapper">
            <sidebaroct></sidebaroct>
            <div class="main-panel">
                <navbaroct></navbaroct>
                <main class="content">
                    <router-outlet></router-outlet>
                </main>
                <footeroct></footeroct>
            </div>
        </div>
     `
})
export class AppComponent {

    constructor(public appState: AppState, public activatedRoute: ActivatedRoute) {}

    ngOnInit() {

    }

}