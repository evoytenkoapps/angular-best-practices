import { Provider } from '@angular/core';
import { UserFacade } from '../_services/facade/user.facade';
import { UserNgxsFacade } from '../_services/facade/user-ngxs.facade';

export const USER_FACADE_PROVIDER: Provider = {
  provide: UserFacade,
  useClass: UserNgxsFacade,
};
