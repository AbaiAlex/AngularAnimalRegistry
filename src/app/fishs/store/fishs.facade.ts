import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {loadDataAction, loadListAction} from '../../fishs/store/fishs.actions';
import {FishListVO, FishVO} from './fishs.interfaces';
import {fishsSelector} from './fishs.selectors';
import {FishsState} from './fishs.reducers';

@Injectable()
export class FishsFacade {
  public listData: Observable<FishListVO[]>  = this.store.select(fishsSelector.listData);
  public editData: Observable<FishVO>  = this.store.select(fishsSelector.editedData);
  constructor(private store: Store<FishsState>) {
  }

  public loadList(): void{
    this.store.dispatch(loadListAction());
  }
  public loadData(id: number): void{
    this.store.dispatch(loadDataAction({id}));
  }

}
