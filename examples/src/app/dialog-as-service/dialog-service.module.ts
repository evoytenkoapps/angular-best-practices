import { NgModule } from '@angular/core';
import { DialogService } from './_service/dialog.service';
import { InfoComponent } from './_components/_dumb/info/info.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogShowRoomComponent } from './_components/_smart/dialog-show-room/dialog-show-room.component';

@NgModule({
  imports: [MatDialogModule],
  providers: [DialogService],
  exports: [DialogShowRoomComponent],
  declarations: [InfoComponent, DialogShowRoomComponent],
})
export class DialogServiceModule {}
