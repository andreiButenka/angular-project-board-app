import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Card from '../../models/Card';
import CardList from '../../models/CardList';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent {

  @Input() public cardList: CardList;
  @Input() public searchCriterion: string;
  @Input() public isDoneSection: boolean;
  @Output() public remove = new EventEmitter<{cardList: CardList; card: Card}>();
  @Output() public expand = new EventEmitter<Card>();
  @Output() public create = new EventEmitter<CardList>();

  onRemove(card: Card) {
    this.remove.emit({
      cardList: this.cardList,
      card
    });
  }

  onExpand(task: Card) {
    this.expand.emit(task);
  }

  onCreate(cardList: CardList) {
    this.create.emit(this.cardList);
  }

}
