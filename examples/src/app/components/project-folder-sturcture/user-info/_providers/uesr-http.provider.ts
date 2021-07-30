import { Provider } from '@angular/core';
import { UserHttpService } from '../_services/api/user-http.service';
import { environment } from '../../../../../environments/environment';
import { UserHttpProdService } from '../_services/api/user-http-prod.service';
import { UserHttpMockService } from '../_services/api/user-http-mock.service';

export const USER_HTTP_SERVICE_PROVIDER: Provider = {
  provide: UserHttpService,
  useClass: environment.iseUseApi ? UserHttpProdService : UserHttpMockService,
};
