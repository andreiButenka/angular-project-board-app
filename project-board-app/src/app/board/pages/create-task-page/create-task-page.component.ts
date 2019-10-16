import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';
import Card from '../../models/Card';

@Component({
  selector: 'app-create-task-page',
  templateUrl: './create-task-page.component.html',
  styleUrls: ['./create-task-page.component.sass']
})
export class CreateTaskPageComponent implements OnInit {

  public cardListName: string;

  public cardlists = this.boardService.cardLists;


  constructor(private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit() {
    this.cardListName = this.route.snapshot.params.name;
  }

}
