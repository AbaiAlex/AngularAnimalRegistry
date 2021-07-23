import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CatListVO} from './cats.interfaces';

@Injectable()
export class CatsRepository {
  constructor() {
  }

  list(): Observable<CatListVO[]> {
return of([
  {id: 1, name: 'Kandúr'},
  {id: 2, name: 'Foltos'},
  {id: 3, name: 'Cirmi'}
]);
  }
}
