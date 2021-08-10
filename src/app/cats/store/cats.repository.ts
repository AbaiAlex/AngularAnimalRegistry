import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CatListVO, CatVO} from './cats.interfaces';

@Injectable()
export class CatsRepository {
  constructor() {
  }
  cats: CatVO[] = [
    {id: 1, name: 'Kandúr', gender: 'Male', dateOfBirth: '2020.08.12', purebred: true, type: 'American Bobtail'},
    {id: 2, name: 'Foltos', gender: 'Female', type: 'American Wirehair', purebred: false, dateOfBirth: '2021.08.02'},
    {id: 3, name: 'Cirmi', gender: 'Male (neutered)', dateOfBirth: '2021.01.01', purebred: false, type: 'Chartreux'}];

  list(): Observable<CatListVO[]> {
return of([
  {id: 1, name: 'Kandúr'},
  {id: 2, name: 'Foltos'},
  {id: 3, name: 'Cirmi'}
]);
  }

  getCat(id: number): Observable<CatVO>{
    return of(this.cats[id]);
    console.log(this.cats[id]);
  }

}
