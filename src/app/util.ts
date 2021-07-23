import {TypedAction} from '@ngrx/store/src/models';
import {Observable, of, pipe, UnaryFunction} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Action} from '@ngrx/store';


export function toActionCreatorPayload<S extends TypedAction<any>, E extends Action>(newSucceedAction: (payload) => S,
                                                                                     newFailureAction: new(error) => E):
UnaryFunction<any, Observable<any>> {
  return  pipe(
    map(data => {
      return newSucceedAction(data);
    }),
    catchError((err: any) => {
      return of(new newFailureAction(err));
    })
  );
}

export  class HandleErrorAction implements  Action{
  readonly type = 'error';
  constructor(public err: any) {
  }
}
