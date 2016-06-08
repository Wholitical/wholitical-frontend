import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Wholitical {
  constructor(private http: Http) {}

  getCandidatesByZip(zip: string) {
    return this.makeRequest(`api/candidates/${zip}`);
  }

  private makeRequest(path: string) {

    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json().results);
  }
}
