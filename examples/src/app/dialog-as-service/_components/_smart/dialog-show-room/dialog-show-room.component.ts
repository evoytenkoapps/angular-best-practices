import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { InfoComponent } from '../../_dumb/info/info.component';
import { DialogService } from '../../../_service/dialog.service';
import { VmOneButtonDialogModel } from '../../../_models/one-button-dialog.model';

@Component({
  selector: 'app-dialog-show-room',
  templateUrl: './dialog-show-room.component.html',
  styleUrls: ['./dialog-show-room.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogShowRoomComponent implements OnInit {
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.dialogService.showDialog<InfoComponent, VmOneButtonDialogModel, void>(InfoComponent, {
      label: 'Labels',
      content: 'Content',
      btnText: 'buttonText',
    });
  }
}
