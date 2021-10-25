import { AnimalFacade } from './animal.facade';
import { Actions, ofActionCompleted, ofActionDispatched, Store } from '@ngxs/store';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';
import { AnimalState } from '../../_store/states/animal-state';
import { AnimalStateModel } from '../../_store/models/animal-state';
import { AddAnimal, ResetAnimals } from '../../_store/states/animal.actions';
import { Injectable } from '@angular/core';
import { StatusData } from '../../_models/status-data';

@Injectable()
export class AnimalNgxsFacade extends AnimalFacade {
  private addAnimalStatus$!: Observable<StatusData>;
  constructor(private store: Store, private actions$: Actions) {
    super();

    this.initAnimalAddStatus();
  }

  public addAnimal(animal: string): void {
    this.store.dispatch(new AddAnimal(animal));
  }

  public getAddAnimalStatus(): Observable<StatusData> {
    return this.addAnimalStatus$;
  }

  public getAnimals(): Observable<string[]> {
    return this.store.select(AnimalState.selectAnimals);
  }

  public resetAnimals(): void {
    this.store.dispatch(new ResetAnimals());
  }

  public getAnimalStateModel(): Observable<AnimalStateModel> {
    return this.store.select(AnimalState.selectState);
  }

  // Example how to use state without store data inside
  private initAnimalAddStatus(): void {
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

    this.addAnimalStatus$ = merge(actionCompleted$, actionDispatched$).pipe(shareReplay(1));
  }
}
