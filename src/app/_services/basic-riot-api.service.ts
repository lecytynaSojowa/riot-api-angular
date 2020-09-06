import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SummonerByNameResult } from '../_models/summoner-by-name-result';
import { Observable } from 'rxjs';
import { Match } from '../_models/match';

@Injectable({
  providedIn: 'root'
})

export class BasicRiotApiService {

  constructor(private http: HttpClient) { }

  public summonerByNameExample(summonerName: string, server: string): Observable<SummonerByNameResult> {
    const url = `http://localhost:5000/api/SummonerBase/GetBySummonerName/${summonerName}/${server}`;
    return this.http.get<SummonerByNameResult>(url);
  }

  public matchesBySummonerName(summonerName: string, server: string): Observable<Match[]> {
    const url = `http://localhost:5000/api/Match/GetSummonerMatch/${summonerName}/${server}/3`;
    return this.http.get<Match[]>(url);
  }
}
