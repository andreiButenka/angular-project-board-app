import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.sass']
})
export class EditTaskPageComponent implements OnInit {

  public cardId: 'string';

  constructor(private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit() {
    this.cardId = this.route.snapshot.params.id;
    console.log(this.cardId);
  }

}
