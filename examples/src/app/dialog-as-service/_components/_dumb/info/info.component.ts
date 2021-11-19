import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VmOneButtonDialogModel } from '../../../_models/one-button-dialog.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoComponent implements OnInit {
  public infoDialogModel: VmOneButtonDialogModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: VmOneButtonDialogModel,
    private dialogRef: MatDialogRef<InfoComponent>
  ) {
    this.infoDialogModel = data;
  }

  ngOnInit(): void {}

  public onBtnClick(): void {
    this.dialogRef.close();
  }

  public onCloseClick(): void {
    this.dialogRef.close();
  }
}
