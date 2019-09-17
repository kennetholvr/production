import { Injectable } from '@angular/core';
import { ITile, tiles } from 'src/app/client-spec';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }
  tiles: ITile[] = tiles;
}
