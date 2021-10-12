import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StatusData } from '../../../_models/status-data';
import { UnsubscribeService } from '../../../../service/unsubscribe.service';
import { AnimalHttpService } from '../../../_services/api/animal-http.service';
import { Observable } from 'rxjs';
import { DataWithStatus } from '../../../_models/data-with-status';

@Component({
  selector: 'app-no-facade',
  templateUrl: './no-facade.component.html',
  styleUrls: ['./no-facade.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UnsubscribeService],
})
// Its just an example
export class NoFacadeComponent implements OnInit {
  public animals$!: Observable<DataWithStatus<string[]>>;
  public status: typeof StatusData = StatusData;

  constructor(private unsubscribeService: UnsubscribeService, private animalHttpService: AnimalHttpService) {}

  ngOnInit(): void {
    this.animals$ = this.animalHttpService.getAnimals();
  }
}
