import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { RallyService } from '../shared/rally.service';
import { Auth } from '../shared/auth.class';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

	user: Auth;

	constructor(private rallyService: RallyService, private router: Router) {
		this.user = new Auth();
	}

	onSubmit() {
		this.rallyService.login(this.user.email, this.user.password).subscribe((result) => {
			if (result) {
				this.router.navigate(['dashboard']);
			}
		});
	}

}
