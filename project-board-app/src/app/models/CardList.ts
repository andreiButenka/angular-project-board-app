import User from './User';

export default interface CardList {
    id: string;
    name: string;
    description: string;
    dueDate?: Date | string;
    assignee?: User;
  }