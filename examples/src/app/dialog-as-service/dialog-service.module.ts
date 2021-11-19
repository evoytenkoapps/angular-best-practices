import { NgModule } from '@angular/core';
import { DialogService } from './_service/dialog.service';
import { InfoComponent } from './_components/_dumb/info/info.component';

@NgModule({ providers: [DialogService], declarations: [InfoComponent] })
export class DialogServiceModule {}
