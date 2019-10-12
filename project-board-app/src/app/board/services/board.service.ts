import { Injectable } from '@angular/core';
import Card from '../models/Card';
import { BoardModule } from '../board.module';

@Injectable()
export class BoardService {

  public readonly cardLists = [
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
          isDone: false,
          dueDate: '2019-10-14T00:00:00Z',
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
          isDone: false,
          dueDate: '2019-11-05T00:00:00Z',
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
          isDone: false,
          dueDate: '2019-10-17T00:00:00Z',
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
          isDone: false,
          dueDate: '2019-11-19T00:00:00Z',
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
          isDone: false,
          dueDate: '2019-10-15T00:00:00Z',
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
          isDone: false,
          dueDate: '2019-11-21T00:00:00Z',
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
          isDone: true,
          dueDate: '2019-10-02T00:00:00Z',
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
          isDone: true,
          dueDate: '2019-11-23T00:00:00Z',
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
          isDone: true,
          dueDate: '2019-11-24T00:00:00Z',
          Assignee: {
            id: 9,
            firstName: 'FirstName9',
            lastName: 'LastName9'
          }
        },
      ]
    },
  ];

  public removeCard({ cardList, card }) {
    const index: number = cardList.cards.findIndex((existingTask: Card)=> existingTask.id === card.id);
    cardList.cards.splice(index, 1);
  }

  public expandCard(card: Card) {
    card.expanded = !card.expanded;
  }

}
