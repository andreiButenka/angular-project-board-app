import { Component, OnInit, Input } from '@angular/core';
import Card from '../../models/Card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {

  @Input() public searchCriterion: string;

  public readonly taskLists = [
    {
      id: 1,
      name: 'Backlog',
      isDoneSection: false,
      cards: [
        {
          id: 1,
          name: 'name1',
          description: 'description1',
          expanded: false,
          dueDate: '2019-09-16T00:00:00Z',
          Assignee: {
            id: 1,
            firstName: 'FirstName1',
            lastName: 'LastName1'
          }
        },
        {
          id: 2,
          name: 'name2',
          description: 'description2',
          expanded: false,
          dueDate: '2019-09-17T00:00:00Z',
          Assignee: {
            id: 2,
            firstName: 'FirstName2',
            lastName: 'LastName2'
          }
        },
        {
          id: 3,
          name: 'name3',
          description: 'description3',
          expanded: false,
          dueDate: '2019-09-18T00:00:00Z',
          Assignee: {
            id: 3,
            firstName: 'FirstName3',
            lastName: 'LastName3'
          }
        },
      ]
    },
    {
      id: 2,
      name: 'In progress',
      isDoneSection: false,
      cards: [
        {
          id: 4,
          name: 'name4',
          description: 'description4',
          expanded: false,
          dueDate: '2019-09-19T00:00:00Z',
          Assignee: {
            id: 4,
            firstName: 'FirstName4',
            lastName: 'LastName4'
          }
        },
        {
          id: 5,
          name: 'name5',
          description: 'description5',
          expanded: false,
          dueDate: '2019-09-20T00:00:00Z',
          Assignee: {
            id: 5,
            firstName: 'FirstName5',
            lastName: 'LastName5'
          }
        },
        {
          id: 6,
          name: 'name6',
          description: 'description6',
          expanded: false,
          dueDate: '2019-09-21T00:00:00Z',
          Assignee: {
            id: 6,
            firstName: 'FirstName6',
            lastName: 'LastName6'
          }
        },
      ]
    },
    {
      id: 3,
      name: 'Done',
      isDoneSection: true,
      cards: [
        {
          id: 7,
          name: 'name7',
          description: 'description7',
          expanded: false,
          dueDate: '2019-09-22T00:00:00Z',
          Assignee: {
            id: 7,
            firstName: 'FirstName7',
            lastName: 'LastName7'
          }
        },
        {
          id: 8,
          name: 'name8',
          description: 'description8',
          expanded: false,
          dueDate: '2019-09-23T00:00:00Z',
          Assignee: {
            id: 8,
            firstName: 'FirstName8',
            lastName: 'LastName8'
          }
        },
        {
          id: 9,
          name: 'name9',
          description: 'description9',
          expanded: false,
          dueDate: '2019-09-24T00:00:00Z',
          Assignee: {
            id: 9,
            firstName: 'FirstName9',
            lastName: 'LastName9'
          }
        },
      ]
    },
  ];


  constructor() { }

  ngOnInit() {
    
  }

  public removeItem({ taskList, task }) {
    const index = taskList.cards.findIndex((existingTask: Card)=> existingTask.id === task.id);
    taskList.cards.splice(index, 1);
  }

  public expandCard(task: Card) {
    task.expanded = !task.expanded;
  }

}
