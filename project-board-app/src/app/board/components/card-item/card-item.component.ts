import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Card from '../../models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent {
  
  @Input() public card: Card;
  

  @Output() public remove = new EventEmitter<Card>();

  @Output() public edit = new EventEmitter<Card>();

  @Output() public expand = new EventEmitter<Card>();


  onRemove() {
    this.remove.emit(this.card);
  }

  onEdit() {
    this.edit.emit(this.card);
  }

  onExpand() {
    this.expand.emit(this.card);
  }

}
