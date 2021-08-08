import { Observable } from 'rxjs';
import { MyStatus } from '../../../_models/my-status.enum';

export interface Animals {
  animals: string[];
}

export abstract class AnimalFacade {
  public abstract addAnimal(animal: string): void;
  public abstract resetAnimals(): void;
  public abstract getAnimals(): Observable<Animals>;
  public abstract getAddAnimalStatus(): Observable<MyStatus>;
  public abstract incrementAction(): void;
  public abstract getCounter(): Observable<number>;
  public abstract getAllState(): Observable<AnimalStateModel>;
  public abstract empty(): void;
}
