import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';
import Cardlist from '../../models/CardList';
import Card from '../../models/Card';
import User from '../../models/User';

@Component({
  selector: 'app-create-task-page',
  templateUrl: './create-task-page.component.html',
  styleUrls: ['./create-task-page.component.sass']
})
export class CreateTaskPageComponent implements OnInit {

  public cardListName: string;

  public goalCard = this.boardService.goalCard;

  public cardlists = this.boardService.cardLists;

  public assignee: User;


  constructor(
    private route: ActivatedRoute, 
    private boardService: BoardService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.cardListName = this.route.snapshot.params.name;
  }

  public save(assignee: User): void {
    const card: Card = this.goalCard;
    card.id = String(this.boardService.goalCardID);
    card.Assignee = assignee;
    card.dueDate = new Date(this.goalCard.dueDate).toISOString();
    this.boardService.cardLists.forEach((cardlist: Cardlist) => {
      if (cardlist.name === this.cardListName) {
        if (cardlist.name === 'done') {
          card.isDone = true;
        }
        cardlist.cards.push(card);
      }
    });

    this.boardService.goalCard = {
      id: '',
      name: '',
      description: '',
      expanded: false,
      isDone: false,
      dueDate: '',
      Assignee: assignee
    };
    
    this.boardService.goalCardID += 1;

    this.router.navigateByUrl('/board');
  }

  public cancel() {
    this.router.navigateByUrl('/board');
    this.boardService.goalCard = {
      id: '',
      name: '',
      description: '',
      expanded: false,
      isDone: false,
      dueDate: '',
      Assignee: {
        id: '',
        firstName: '',
        lastName: ''
      }
    };
  }

}
