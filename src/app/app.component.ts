import {
  Component,
  ViewChild
} from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild("dialog") dialogComponent: DialogComponent;
  parentData :string = "hello";


  openDialog() {
    this.dialogComponent.openDialog();
  }

  getDialogData(e)
  {
    /** eが持っている情報に基づいて、ここで適切なデータの書き換えを行う */
    this.parentData = e.data;
  }
}
