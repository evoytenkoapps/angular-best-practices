import { NgModule } from '@angular/core';
import { ANIMAL_FACADE_PROVIDER } from './_providers/animal-facde.provider';
import { AnimalState } from './_store/states/animal-state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { AnimalComponent } from './_components/_smart/animal/animal.component';

@NgModule({
  imports: [NgxsModule.forRoot([AnimalState], { developmentMode: true }), NgxsReduxDevtoolsPluginModule.forRoot()],
  providers: [ANIMAL_FACADE_PROVIDER],
  declarations: [AnimalComponent],
})
export class ReduxStoreNgxsModule {}
