import { Injectable } from '@angular/core';
import { LolApi, Constants } from 'twisted';

const api = new LolApi();

@Injectable({
  providedIn: 'root'
})

export class BasicRiotApiService {

  constructor() { }

  public summonerByNameExample() {
    const summoner = api.Summoner.getByName('Hide on bush', Constants.Regions.KOREA);
    console.log(summoner);
  }
}
