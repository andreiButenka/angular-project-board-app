import User from './User';

export default interface Card {
    id: string;
    name: string;
    description: string;
    expanded: boolean;
    isDone: boolean;
    dueDate?: string;
    Assignee?: User;
  }
  