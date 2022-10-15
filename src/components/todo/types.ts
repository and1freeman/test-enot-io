export interface TodoData {
  id: string;
  name: string;
  description?: string;
  date: string;
  completed: boolean;
}

export type TodoEvent =
  | {
      type: 'todo/toggle';
      data: {
        id: string;
      };
    }
  | {
      type: 'todo/add';
      data: TodoData;
    };
