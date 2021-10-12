import { NgModule } from '@angular/core';
import { ANIMAL_FACADE_PROVIDER } from './_providers/animal-facde.provider';
import { AnimalState } from './_store/states/animal-state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { AnimalComponent } from './_components/_smart/animal/animal.component';
import { CommonModule } from '@angular/common';
import { ANIMAL_HTTP_PROVIDER } from './_providers/animal-http.provider';
import { NoFacadeComponent } from './_components/_smart/no-facade/no-facade.component';

@NgModule({
  imports: [
    NgxsModule.forRoot([AnimalState], { developmentMode: true }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    CommonModule,
  ],
  providers: [ANIMAL_FACADE_PROVIDER, ANIMAL_HTTP_PROVIDER],
  declarations: [AnimalComponent, NoFacadeComponent],
  exports: [AnimalComponent],
})
export class DataFacadeModule {}
