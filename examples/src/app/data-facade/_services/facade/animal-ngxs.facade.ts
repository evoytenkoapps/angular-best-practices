import { AnimalFacade } from './animal.facade';
import { Actions, ofActionCompleted, ofActionDispatched, Store } from '@ngxs/store';
import { map, startWith } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';
import { AnimalState } from '../../_store/states/animal-state';
import { AnimalStateModel } from '../../_store/models/animal-state';
import { AddAnimal, ResetAnimals } from '../../_store/states/animal.actions';
import { Injectable } from '@angular/core';
import { StatusData } from '../../_models/status-data';

@Injectable()
export class AnimalNgxsFacade extends AnimalFacade {
  constructor(private store: Store, private actions$: Actions) {
    super();
  }

  addAnimal(animal: string): void {
    this.store.dispatch(new AddAnimal(animal));
  }

  getAddAnimalStatus(): Observable<StatusData> {
    const actionCompleted$ = this.actions$.pipe(
      ofActionCompleted(AddAnimal),
      map((status: { result: { successful: any; canceled: any } }) => {
        if (status.result.successful) {
          return StatusData.LOADED;
        }
        if (status.result.canceled) {
          return StatusData.CANCEL;
        }
        return StatusData.ERROR;
      }),
      startWith(StatusData.PENDING)
    );

    const actionDispatched$ = this.actions$.pipe(
      ofActionDispatched(AddAnimal),
      map(() => {
        return StatusData.LOADING;
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
