import User from './User';
import Card from './Card';

export default interface CardList {
    id: string;
    name: string;
    cards: Card[];
    isDoneSection: boolean;
}