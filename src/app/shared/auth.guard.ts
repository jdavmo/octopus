import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { RallyService } from './rally.service';

@Injectable()
export class AuthInGuard implements CanActivate {

	constructor(private auth: RallyService, private router: Router, private activatedRoute: ActivatedRoute) {}

	canActivate() {

		if (!this.auth.isLoggedIn()) {
	      this.router.navigate(['auth']);
	      return false;
	    }
	    return true;

	}
}