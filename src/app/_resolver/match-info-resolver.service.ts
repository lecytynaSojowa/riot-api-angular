import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Match } from '../_models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchInfoResolverService implements Resolve<Match>  {

  constructor(private http: HttpClient) { }
  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Match | import('rxjs').Observable<Match> | Promise<Match> {
    const matchId = _route.params.id;
    const serverName = localStorage.getItem('serverName');
    const url = `http://localhost:5000/api/Match/GetMatchInfo/${matchId}/${serverName}`;
    return this.http.get<Match>(url).pipe(catchError((error) => {
      return of(null);
    }));
  }
}
