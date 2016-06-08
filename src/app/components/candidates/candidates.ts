import {Component} from '@angular/core';
import {Wholitical} from '../../services/wholitical.service';
import {Observable} from 'rxjs/Observable';
import {RouteParams} from '@angular/router-deprecated';

@Component({
  selector: 'candidates',
  templateUrl: 'app/components/candidates/candidates.html',
  styleUrls: ['app/components/candidates/candidates.css'],
  providers: [Wholitical],
  pipes: []
})
export class Candidates {
  candidates: Observable<any>;
  constructor(private wholitical: Wholitical, private params : RouteParams) {}
  ngOnInit() {
    this.candidates = this.wholitical.getCandidatesByZip(this.params.get('zip'));
  }
}
