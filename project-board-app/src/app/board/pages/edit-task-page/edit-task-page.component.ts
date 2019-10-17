import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';
import Card from '../../models/Card';
import User from '../../models/User';

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.sass']
})
export class EditTaskPageComponent implements OnInit {

  public cardId: 'string';

  public cardBackUp: any;

  public goalCard: Card;

  public assignee: User;

  constructor(private route: ActivatedRoute, private boardService: BoardService, private router: Router) { }

  ngOnInit() {
    this.cardId = this.route.snapshot.params.id;
    this.goalCard = this.getCard(this.cardId);
    this.cardBackUp = JSON.stringify(this.goalCard);
    this.assignee = this.goalCard.Assignee;
    console.log(this.cardBackUp);
  }

  getCard(id: 'string'): Card {
    let goalCard: Card;
    this.boardService.cardLists.forEach(cardList => {
      cardList.cards.forEach(card => {
        if (card.id === id) {
          goalCard = card;
        }
      })
    })
    return goalCard;
  }

  public backUp(cardLists, backUpcard) {
    let backUpCard = JSON.parse(backUpcard);
    let goalCardListIndex;
    cardLists.forEach((cardList, index) => {
      goalCardListIndex = index;
      cardList.cards.forEach((card, index) => {
        if (card.id === backUpCard.id) {
          console.log('yes');
          cardLists[goalCardListIndex].cards[index] = backUpCard;
          console.log(card);
          console.log(backUpCard);
          console.log(cardLists);
        }
      })
    })
    
  }


  save(assignee: User): void {
    this.goalCard.Assignee = assignee;
    this.router.navigateByUrl('/board');
  }

  cancel(): void {
    this.backUp(this.boardService.cardLists, this.cardBackUp);
    this.router.navigateByUrl('/board');
  }

}
