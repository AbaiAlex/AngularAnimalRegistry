import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {FishListVO, FishVO} from './fishs.interfaces';

@Injectable()
export class FishsRepository {
  constructor() {
  }
  fishs: FishVO[] = [
    {id: 1, name: 'Sam', gender: 'Male', dateOfBirth: '2021.08.12', type: 'Xifo'},
    {id: 2, name: 'Dean', gender: 'Male', type: 'Xifo', dateOfBirth: '2021.08.02'},
    {id: 3, name: 'Castiel', gender: 'Male', dateOfBirth: '2021.01.01', type: 'Ancius'},
    {id: 4, name: 'Crowley', gender: 'Male', type: 'Black Molly', dateOfBirth: '2021.08.02'}];

  list(): Observable<FishListVO[]> {
    return of([
      {id: 1, name: 'Sam'},
      {id: 2, name: 'Dean'},
      {id: 3, name: 'Castiel'},
      {id: 4, name: 'Crowley'}
    ]);
  }

  getFish(id: number): Observable<FishVO>{
    return of(this.fishs[id]);
    console.log(this.fishs[id]);
  }

}
