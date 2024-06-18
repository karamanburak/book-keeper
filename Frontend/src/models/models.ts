export type EventFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface Book {
  id: number;
  title: string;
  author: string;
  isbn: number;
  genre: string;
  date: string;
  image: string;
}
