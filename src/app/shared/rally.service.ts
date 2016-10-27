import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RallyService {

	private loggedIn = false;

	constructor(private http: Http) {
		this.loggedIn = !!localStorage.getItem('auth_token');
	}

	login(email, password) {
		let headers = new Headers();
		headers.append('Authorization', 'Basic ' +btoa(email+':'+password));

		return this.http
			.get(
				'https://rally1.rallydev.com/slm/webservice/v2.0/security/authorize',
				{ headers }
			)
			.map(res => res.json())
			.map((res) => {
				if(res.OperationResult) {
					console.log(res);
					localStorage.setItem('auth_token', res.OperationResult.SecurityToken);
					this.loggedIn = true;
				}
				return res.OperationResult;
			});
	}

	logout() {
		localStorage.removeItem('auth_token');
		this.loggedIn = false;
	}

	isLoggedIn() {
		return this.loggedIn;
	}

}
