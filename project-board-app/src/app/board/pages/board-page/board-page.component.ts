import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../services/board.service';
import Card from '../../models/Card';
import CardList from '../../models/CardList';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.sass']
})
export class BoardPageComponent implements OnInit {

  public searchCriterion: string;

  public cardLists: CardList[];

  constructor(private boardService: BoardService) {}

  public ngOnInit(): void {
    this.cardLists = this.boardService.cardLists;
  }

  public removeCard(args): void {
    this.boardService.removeCard(args);
  }

  public expandCard(args: Card): void {
    this.boardService.expandCard(args);
  }

  public onSearch(criterion: string) {
    this.searchCriterion = criterion;
  }

  public goToCreateTaskPage(args: CardList): void {
    this.boardService.goToCreateTaskPage(args);
  }

  public goToEditTaskPage(args: Card): void {
    this.boardService.goToEditTaskPage(args);
  }
}
