import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  @Input() item: string | undefined
  @Output() onDelete = new EventEmitter
  @Output() onCancel = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }


Delete(){
  alert("Your Account is Deleting.....")
  this.onDelete.emit(this.item)
}
Cancel(){
  this.onCancel.emit()
}
}