import { Injectable } from '@angular/core';
import { BaseDialogData } from '../_models/base-dialog-data';
import { ComponentType } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}

  public showDialog<C, D extends BaseDialogData, R>(component: ComponentType<C>, data?: D): Observable<R | undefined> {
    const materialConfig: MatDialogConfig<D> | undefined = data
      ? { disableClose: data?.isDisableCloseOnBackClick, data }
      : data;
    return this.dialog.open<C, D, R>(component, materialConfig).afterClosed();
  }
}
