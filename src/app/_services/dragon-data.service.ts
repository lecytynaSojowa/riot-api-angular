import { Injectable } from '@angular/core';
import { version } from 'process';

@Injectable({
  providedIn: 'root'
})
export class DragonDataService {

  constructor() { }

  public getLastDDVer(): string {
    return '10.23.1';
  }

}
