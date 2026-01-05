export interface TaskModel {
  id: string;
  userId: string;
  summary:string;
  dueDate:string;
  title:string;
};

export interface NewTaskData{
    title: string;
    summary: string;
    dueDate: string;
  }