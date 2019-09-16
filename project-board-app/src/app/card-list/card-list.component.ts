import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import CardList from '../models/CardList';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit, CardList {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: User;

  constructor() { }

  ngOnInit() {
  }

}
