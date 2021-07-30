import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USER_HTTP_SERVICE_PROVIDER } from './_providers/uesr-http.provider';
import { USER_FACADE_PROVIDER } from './_providers/user-info.provider';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [USER_HTTP_SERVICE_PROVIDER, USER_FACADE_PROVIDER],
})
export class UserInfoModule {}
