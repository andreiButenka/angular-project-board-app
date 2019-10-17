import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';
import User from '../../models/User';
import Card from '../../models/Card';

@Component({
  selector: 'app-create-task-page',
  templateUrl: './create-task-page.component.html',
  styleUrls: ['./create-task-page.component.sass']
})
export class CreateTaskPageComponent implements OnInit {

  public cardListName: string;

  public goalCard = this.boardService.goalCard;

  public cardlists = this.boardService.cardLists;

  public assignee: any;


  constructor(private route: ActivatedRoute, private boardService: BoardService, private router: Router) { }

  ngOnInit() {
    this.cardListName = this.route.snapshot.params.name;
  }

  save(assignee: User): void {
    const card = this.goalCard;
    card.id = String(this.boardService.goalCardID);
    card.Assignee = assignee;
    card.dueDate = new Date(this.goalCard.dueDate).toISOString();
    this.boardService.cardLists.forEach(cardlist => {
      if (cardlist.name === this.cardListName) {
        if (cardlist.name === 'done') {
          card.isDone = true;
        }
        console.log(cardlist);
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
   
    
    // console.log(this.newCard);
  }

  cancel() {
    this.router.navigateByUrl('/board');
    this.boardService.goalCard = {
      id: '',
      name: '',
      description: '',
      expanded: false,
      isDone: false,
      dueDate: '',
      Assignee: {
        id: 1,
        firstName: '',
        lastName: ''
      }
    };
  }

}
