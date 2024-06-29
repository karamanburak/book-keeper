export type EventFunc = (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface IBook {
  _id: string;
  title: string;
  author: string;
  ISBN: number;
  genre: string;
  publicationYear: number;
  image: string;
}

export interface IInitialState {
  _id?: string;
  title: string;
  author: string;
  ISBN: number;
  publicationYear: number;
  genre: string;
  image: string;
}

export interface IUpdateBook {
  title: string;
  author: string;
  ISBN: number;
  genre: string;
  publicationYear: number;
  image: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
