import { Observable } from 'rxjs';
import { MyStatus } from '../../../_models/my-status.enum';
import { AnimalStateModel } from '../../../_store/models/animal-state';
import { Animals } from '../../../_models/animals';

export abstract class AnimalFacade {
  public abstract addAnimal(animal: string): void;
  public abstract resetAnimals(): void;
  public abstract getAnimals(): Observable<string[]>;
  public abstract getAddAnimalStatus(): Observable<MyStatus>;
  public abstract getAnimalStateModel(): Observable<AnimalStateModel>;
}
