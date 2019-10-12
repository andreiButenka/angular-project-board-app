import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.sass']
})
export class BoardPageComponent implements OnInit {

  @Input() public searchCriterion: string;

  public cardLists;

  constructor(private boardService: BoardService) {}

  public ngOnInit(): void {
    this.cardLists = this.boardService.cardLists;
  }

  public removeCard(args): void {
    this.boardService.removeCard(args);
  }

  public expandCard(args): void {
    this.boardService.expandCard(args);
  }
}
