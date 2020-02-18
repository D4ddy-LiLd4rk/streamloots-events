import { IStreamloots } from "./IStreamloots";

export class StreamlootsCard {
  imageURL: string;
  soundURL: string;
  message: string;
  cardName: string;
  rarity: string;
  userName: string;

  constructor(event: IStreamloots) {
    this.imageURL = event.imageUrl;
    this.soundURL = event.soundUrl;
    this.message = event.message;
    this.cardName = event.data.cardName;
    this.rarity = event.data.fields[0].value;
    this.userName = event.data.fields[1].value;
  }

  toString(): string {
    return `
    CardName: ${this.cardName}
    Message: ${this.message}
    Rarity: ${this.rarity}
    UserName: ${this.userName}`;
  }

}