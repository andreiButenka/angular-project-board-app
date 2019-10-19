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

  public cardLists = this.boardService.cardLists;

  constructor(private boardService: BoardService) {}

  public ngOnInit(): void {
     
  }

  public removeCard(args: { cardList: CardList; card: Card }): void {
    this.boardService.removeCard(args);
  }

  public expandCard(args: Card): void {
    this.boardService.expandCard(args);
  }

  public onSearch(criterion: string) {
    this.boardService.onSearch(criterion);
    this.searchCriterion = this.boardService.searchCriterion;
  }

  public goToCreateTaskPage(args: CardList): void {
    this.boardService.goToCreateTaskPage(args);
  }

  public goToEditTaskPage(args: Card): void {
    this.boardService.goToEditTaskPage(args);
  }
}
