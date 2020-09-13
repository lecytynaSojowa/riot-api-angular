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
    const summonerName = localStorage.getItem('summonerName');
    const serverName = localStorage.getItem('serverName');
    const url = `http://localhost:5000/api/Match/GetSummonerMatch/${summonerName}/${serverName}/1`;
    return this.http.get<Match>(url).pipe(catchError((error) => {
      return of(null);
    }));
  }
}
