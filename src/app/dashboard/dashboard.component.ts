import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { RallyService } from '../shared/rally.service';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html'
  /*styleUrls: ['']*/
})
export class DashboardComponent {

	constructor(private rallyService: RallyService, private router: Router) {}

}
