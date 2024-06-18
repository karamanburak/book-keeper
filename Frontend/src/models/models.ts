export type EventFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface Book {
  id: number;
  _id: string;
  title: string;
  author: string;
  ISBN: number;
  genre: string;
  publicationYear: number;
  image: string;
}
