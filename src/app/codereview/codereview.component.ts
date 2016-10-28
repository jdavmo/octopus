import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { RallyService } from '../shared/rally.service';

@Component({
  selector: 'codereview',
  templateUrl: './codereview.component.html'
})
export class CodereviewComponent {

	constructor(private rallyService: RallyService, private router: Router) {}

}
