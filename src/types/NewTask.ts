export interface NewTask {
    id: number;
    text: string;
    category: string;
    done: boolean;
    date?: string;
};

export  interface Props {
    task: NewTask
  }  

