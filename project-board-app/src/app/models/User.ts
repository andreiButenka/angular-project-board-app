import Card from './Card';

export default interface User {
    id: string;
    name: string;
    cards: Card[];
  }
  