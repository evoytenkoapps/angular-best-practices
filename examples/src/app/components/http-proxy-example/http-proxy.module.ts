import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpProxyExampleComponent } from './http-proxy-example.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [HttpProxyExampleComponent],
  imports: [CommonModule],
  providers: [HttpService],
  exports: [
    HttpProxyExampleComponent
  ]
})
export class HttpProxyModule {}
