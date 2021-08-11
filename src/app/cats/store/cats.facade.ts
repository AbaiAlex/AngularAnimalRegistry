import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CatListVO, CatVO} from './cats.interfaces';
import {CatsState} from './cats.reducers';
import {catsSelector} from './cats.selectors';
import {loadDataAction, loadListAction} from './cats.actions';

@Injectable()
export class CatsFacade {
  public listData: Observable<CatListVO[]>  = this.store.select(catsSelector.listData);
  public editData: Observable<CatVO>  = this.store.select(catsSelector.editedData);
  constructor(private store: Store<CatsState>) {
  }

  public loadList(): void{
    this.store.dispatch(loadListAction());
  }
  public loadData(id: number): void{
    this.store.dispatch(loadDataAction({id}));
  }

}
