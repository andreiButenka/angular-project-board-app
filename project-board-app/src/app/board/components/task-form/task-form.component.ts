import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BoardService } from '../../services/board.service';
import Card from '../../models/Card';
import User from '../../models/User';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.sass']
})
export class TaskFormComponent implements OnInit {

  @Input() public goalCard: Card; 
  @Input() public assignee: User; 
  @Output() public cancel = new EventEmitter<void>();
  @Output() public save = new EventEmitter<User>();

  public assigneesList = this.boardService.extractAssignee(this.boardService.cardLists);

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    
  }
  
  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    this.save.emit(this.assignee);
  }

}
