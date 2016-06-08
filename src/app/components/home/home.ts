import {Injectable,Component} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Injectable()
@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  directives: [],
  pipes: []
})
export class Home {

  constructor(public router: Router) {}

  findMyCandidates(zipForm: string) {
    this.router.navigate(['Candidates',{zip:zipForm}])
  }

  ngOnInit() {

  }

}
