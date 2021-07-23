import {Injectable} from '@angular/core';
import {AppState} from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectChangesCounter} from '../../store/app.selectors';
import {CatListVO, CatVO} from './cats.interfaces';
import {CatsState} from './cats.reducers';
import {catsSelector} from './cats.selectors';
import {loadListAction} from './cats.actions';

@Injectable()
export class CatsFacade {
  public listData: Observable<CatListVO[]>  = this.store.select(catsSelector.listData);
  public editedData: Observable<CatVO>  = this.store.select(catsSelector.editedData);
  constructor(private store: Store<CatsState>) {
  }

  public loadList(): void{
    this.store.dispatch(loadListAction());
  }
}