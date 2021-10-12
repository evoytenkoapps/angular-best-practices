import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import produce from 'immer';
import { AnimalStateModel } from '../models/animal-state';
import { AddAnimal, ResetAnimals } from './animal.actions';

@State<AnimalStateModel>({
  name: 'animals',
  defaults: {
    animals: [],
    counter: 0,
  },
})
@Injectable()
export class AnimalState {
  @Selector()
  static selectAnimals(state: AnimalStateModel): string[] {
    return state.animals;
  }

  @Selector()
  static selectCounter(state: AnimalStateModel): number {
    return state.counter;
  }

  @Selector()
  static selectState(state: AnimalStateModel): AnimalStateModel {
    return state;
  }

  @Action(AddAnimal)
  addAnimal({ getState, setState }: StateContext<AnimalStateModel>, { animal }: AddAnimal): void {
    setState(
      produce((draft) => {
        draft.animals.push(animal);
      })
    );
  }

  @Action(ResetAnimals)
  resetAnimals({ getState, setState }: StateContext<AnimalStateModel>): void {
    setState(
      produce((draft) => {
        draft.animals = [];
      })
    );
  }
}
