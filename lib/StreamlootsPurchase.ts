import { IStreamloots } from "./IStreamloots";

export class StreamlootsPurchase {
  imageURL: string;
  soundURL: string;
  message: string;
  isGift: boolean;
  quantity: number;
  giftee: string = '';
  userName: string;

  constructor(event: IStreamloots) {
    this.imageURL = event.imageUrl;
    this.soundURL = event.soundUrl;
    this.message = event.message;
    this.isGift = event.data.fields[0].name === 'giftee';
    if (this.isGift) {
      this.giftee = event.data.fields[0].value;
      this.quantity = parseInt(event.data.fields[1].value);
      this.userName = event.data.fields[2].value;
    } else {
      this.quantity = parseInt(event.data.fields[0].value);
      this.userName = event.data.fields[1].value;
    }
  }

  toString(): string {
    return `
    IsGift: ${this.isGift}
    Message: ${this.message}
    Quantity: ${this.quantity}
    UserName: ${this.userName}
    Giftee: ${this.giftee}`;
  }

}