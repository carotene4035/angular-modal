import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Output() clickCloseButton = new EventEmitter<any>();

  @ViewChild("lgModal") modalRef:ModalDirective;
  @Input() dialogData;

  private data;

  constructor() {
  }

  ngOnInit() {
  }

  openDialog()
  {
    /** ダイアログを開いた時、親データから値を取り直す */
    this.data = this.dialogData;
    this.modalRef.show();
  }

  onClose()
  {
    this.modalRef.hide();
    this.clickCloseButton.emit({data: this.data});
  }
}
