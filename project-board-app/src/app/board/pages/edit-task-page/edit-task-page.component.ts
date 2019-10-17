import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';
import Card from '../../models/Card';
import User from '../../models/User';
import CardList from '../../models/CardList';

@Component({
  selector: 'app-edit-task-page',
  templateUrl: './edit-task-page.component.html',
  styleUrls: ['./edit-task-page.component.sass']
})
export class EditTaskPageComponent implements OnInit {

  public cardId: string;

  public cardBackUp: string;

  public goalCard: Card;

  public assignee: User;

  constructor(private route: ActivatedRoute, private boardService: BoardService, private router: Router) { }

  ngOnInit() {
    this.cardId = this.route.snapshot.params.id;
    this.goalCard = this.getCard(this.cardId);
    this.cardBackUp = JSON.stringify(this.goalCard);
    this.assignee = this.goalCard.Assignee;
  }

  public getCard(id: string): Card {
    let goalCard: Card;
    this.boardService.cardLists.forEach((cardList: CardList) => {
      cardList.cards.forEach((card: Card) => {
        if (card.id === id) {
          goalCard = card;
        }
      })
    })
    return goalCard;
  }

  public backUp(cardLists: CardList[], backUpcard: string) {
    let backUpCard = JSON.parse(backUpcard);
    let goalCardListIndex: number;
    cardLists.forEach((cardList: CardList, index: number) => {
      goalCardListIndex = index;
      cardList.cards.forEach((card: Card, index: number) => {
        if (card.id === backUpCard.id) {
          cardLists[goalCardListIndex].cards[index] = backUpCard;
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
