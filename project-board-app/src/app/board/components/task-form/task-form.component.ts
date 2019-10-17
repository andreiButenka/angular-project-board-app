import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() public goalCard: any; 
  @Input() public assignee: any; 

  public cardListName: 'string';

  public assigneesList = this.extractAssignee(this.boardService.cardLists);

  @Output() public cancel = new EventEmitter<any>();
  @Output() public save = new EventEmitter<any>();


  constructor(private route: ActivatedRoute, private boardService: BoardService, private router: Router) { }

  ngOnInit() {
    this.cardListName = this.route.snapshot.params.name;
    
    console.log(this.assigneesList);
  }

  
  extractAssignee(arr: any[]) {
    let assignees = [];
    arr.forEach((list: CardList) => {
      list.cards.forEach((card: Card) => {
        if (!assignees.includes(card.Assignee)) {
          assignees.push(card.Assignee);
        }
      });
    });
    return assignees;
  }

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    this.save.emit(this.assignee);
  }

 
  

 
}
