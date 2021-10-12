import { Observable } from 'rxjs';
import { AnimalStateModel } from '../../_store/models/animal-state';
import { Injectable } from '@angular/core';
import { StatusData } from '../../_models/status-data';

@Injectable()
export abstract class AnimalFacade {
  public abstract addAnimal(animal: string): void;
  public abstract resetAnimals(): void;
  public abstract getAnimals(): Observable<string[]>;
  public abstract getAddAnimalStatus(): Observable<StatusData>;
  public abstract getAnimalStateModel(): Observable<AnimalStateModel>;
}
