import { AnimalFacade, IAnimals, MyStatus } from './animal.facade';
import { Actions, ofActionCompleted, ofActionDispatched, Store } from '@ngxs/store';
import { AddAnimal, EmptyAction, IncCounterAction, ResetAnimals } from '../state/animal.actions';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { actionsExecuting } from '@ngxs-labs/actions-executing';
import { combineLatest, merge, Observable, of } from 'rxjs';

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

  getAnimals(): Observable<IAnimals> {
    return this.store.select(AnimalState.selectAnimals).pipe(map((state: any) => ({ animals: state } as IAnimals)));
  }

  resetAnimals(): void {
    this.store.dispatch(new ResetAnimals());
  }

  incrementAction(): void {
    this.store.dispatch(new IncCounterAction());
  }

  getCounter(): Observable<number> {
    return this.store.select(AnimalState.selectCounter);
  }

  getAllState(): Observable<IAnimalStateModel> {
    return this.store.select(AnimalState.selectState);
  }

  empty(): void {
    this.store.dispatch(new EmptyAction());
  }
}
