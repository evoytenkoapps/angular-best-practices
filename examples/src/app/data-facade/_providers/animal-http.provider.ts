import { Provider } from '@angular/core';
import { AnimalHttpService } from '../_services/api/animal-http.service';
import { AnimalHttpProductionService } from '../_services/api/animal-http-production.service';

export const ANIMAL_HTTP_PROVIDER: Provider = {
  provide: AnimalHttpService,
  useClass: AnimalHttpProductionService,
};
