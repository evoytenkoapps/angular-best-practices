import { NgModule } from '@angular/core';
import { ANIMAL_FACADE_PROVIDER } from './_providers/animal-facde.provider';
import { AnimalState } from './_store/states/animal-state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [NgxsModule.forRoot([AnimalState], { developmentMode: true }), NgxsReduxDevtoolsPluginModule.forRoot()],
  providers: [ANIMAL_FACADE_PROVIDER],
})
export class ReduxStoreNgxsModule {}
