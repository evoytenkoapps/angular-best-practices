import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AnimalFacade } from '../../../_services/facade/animal.facade';
import { Unsubscribable } from 'rxjs';
import { UnsubscribeService } from '../../../../service/unsubscribe.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
export class AnimalComponent implements OnInit {
  public animals: string[] = [];

  constructor(private animalFacade: AnimalFacade, private unsubscribeService: UnsubscribeService) {}

  ngOnInit(): void {
    this.animalFacade
      .getAnimals()
      .pipe(takeUntil(this.unsubscribeService))
      .subscribe((animals: string[]) => {
        console.log('animals', animals);
        this.animals = animals;
      });
  }
}
