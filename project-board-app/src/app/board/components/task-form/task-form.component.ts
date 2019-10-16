import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import CardList from '../../models/CardList';
import Card from '../../models/Card';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.sass']
})
export class TaskFormComponent implements OnInit {

  public cardListName: 'string';

  public assigneesList = [];

  public newCard = this.boardService.newCard;
  

  public assignee = this.boardService.assignee;

  constructor(private route: ActivatedRoute, private boardService: BoardService, private router: Router) { }

  ngOnInit() {
    this.cardListName = this.route.snapshot.params.name;
    this.assigneesList = this.extractAssignee(this.boardService.cardLists);
    console.log(this.assigneesList);
  }

  extractAssignee(arr: any) {
    let assignees = [];
    arr.forEach((list: CardList) => {
      list.cards.forEach((card: Card) => {
        assignees.push(card.Assignee);
      });
    });
    return assignees;
  }

  onSave(): void {
    const card = this.newCard;
    card.id = String(this.boardService.newCardID);
    card.Assignee.firstName = this.assignee.split(' ')[0];
    card.Assignee.lastName = this.assignee.split(' ')[1];
    card.dueDate = new Date(this.newCard.dueDate).toISOString();
    this.boardService.cardLists.forEach(cardlist => {
      if (cardlist.name === this.cardListName) {
        console.log(cardlist);
        cardlist.cards.push(card);
      }
    });

    this.boardService.newCard = {
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
    
    this.boardService.newCardID += 1;

    this.router.navigateByUrl('/board');
   
    
    // console.log(this.newCard);
  }

  onCancel() {
    this.router.navigateByUrl('/board');
    this.boardService.newCard = {
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
