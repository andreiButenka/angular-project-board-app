import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import User from '../../models/User';
import Card from '../../models/Card';
import CardList from '../../models/CardList';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent {
  // id: string;
  // name: string;
  // description: string;
  // dueDate?: Date | string;
  // assignee?: User;

  @Input() public taskList: any;
  @Input() public searchCriterion: string;
  @Input() public isDoneSection: boolean;
  @Output() public remove = new EventEmitter<any>();
  @Output() public expand = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRemove(task: Card) {
    this.remove.emit({
      taskList: this.taskList,
      task
    });
  }

  onExpand(task: Card) {
    this.expand.emit(task);
  }

}
