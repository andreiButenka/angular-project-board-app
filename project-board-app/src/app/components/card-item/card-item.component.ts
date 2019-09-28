import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import User from '../../models/User';
import Card from '../../models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent {
  // id: string;
  // name: string;
  // description: string;
  // dueDate?: Date | string;
  // assignee?: User;

  @Input() public task: Card;
  

  @Output() public remove = new EventEmitter<Card>();

  @Output() public edit = new EventEmitter<Card>();

  @Output() public expand = new EventEmitter<Card>();


  onRemove() {
    this.remove.emit(this.task);
  }

  onEdit() {
    console.log(`Edit card ${this.task.id}`);
    // this.edit.emit(this.task);
  }

  onExpand() {
    this.expand.emit(this.task);
  }

}
