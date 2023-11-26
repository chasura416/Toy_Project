export interface Todos {
  id: string;
  tile: string;
  todo_idx: number;
  checked: boolean;
  checked_at: string;
  finished_at: string;
  task_id: string;
}

export interface Tasks {
  id: string;
  task_tdx: number;
  todos_id: string;
  created_at: string;
}