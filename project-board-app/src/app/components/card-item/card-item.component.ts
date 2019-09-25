import { Component, OnInit } from '@angular/core';
import User from '../../models/User';
import Card from '../../models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass']
})
export class CardItemComponent implements OnInit, Card {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User;

  constructor() { }

  ngOnInit() {
  }

}
