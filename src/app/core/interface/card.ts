export interface Card {
  name: string;
  image?: string;
  sound?: string;
  cards?: Card[];
}