import { AnimalFacade } from './animal.facade';
import { Actions, ofActionCompleted, ofActionDispatched, Store } from '@ngxs/store';
import { map, startWith } from 'rxjs/operators';
import { merge, Observable, of } from 'rxjs';
import { AnimalState } from '../../../_store/states/animal-state';
import { MyStatus } from '../../../_models/my-status.enum';
import { Animals } from '../../../_models/animals';
import { AnimalStateModel } from '../../../_store/models/animal-state';
import { AddAnimal, ResetAnimals } from '../../../_store/states/animal.actions';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class AnimalNgxsFacade extends AnimalFacade {
  constructor(private store: Store, private actions$: Actions) {
    super();
  }

  addAnimal(animal: string): void {
    this.store.dispatch(new AddAnimal(animal));
  }

  getAddAnimalStatus(): Observable<MyStatus> {
    const actionCompleted$ = this.actions$.pipe(
      ofActionCompleted(AddAnimal),
      map((status: { result: { successful: any; canceled: any } }) => {
        if (status.result.successful) {
          return MyStatus.LOADED;
        }
        if (status.result.canceled) {
          return MyStatus.CANCEL;
        }
        return MyStatus.ERROR;
      }),
      startWith(MyStatus.PENDING)
    );

    const actionDispatched$ = this.actions$.pipe(
      ofActionDispatched(AddAnimal),
      map(() => {
        return MyStatus.LOADING;
      })
    );

    return merge(actionCompleted$, actionDispatched$);
  }

  getAnimals(): Observable<string[]> {
    return this.store.select(AnimalState.selectAnimals);
  }

  resetAnimals(): void {
    this.store.dispatch(new ResetAnimals());
  }

  getAnimalStateModel(): Observable<AnimalStateModel> {
    return this.store.select(AnimalState.selectState);
  }
}
