import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatchFull } from '../_models/matchFull';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchInfoResolverService implements Resolve<MatchFull>  {

  constructor(private http: HttpClient) { }
  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): MatchFull | import('rxjs').Observable<MatchFull> | Promise<MatchFull> {
    const matchId = _route.params.id;
    const url = `http://localhost:5000/api/Match/GetMatchInfo/${matchId}/EUNE`;
    return this.http.get<MatchFull>(url).pipe(catchError((error) => {
      return of(null);
    })
    );
  }
}
