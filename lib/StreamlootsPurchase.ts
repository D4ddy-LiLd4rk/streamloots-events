import { IStreamloots } from "./IStreamloots";

export class StreamlootsPurchase {
  imageURL: string;
  soundURL: string;
  message: string;
  quantity: number;
  userName: string;

  constructor(event: IStreamloots) {
    this.imageURL = event.imageUrl;
    this.soundURL = event.soundUrl;
    this.message = event.message;
    this.quantity = parseInt(event.data.fields[0].value);
    this.userName = event.data.fields[1].value;
  }

  toString(): string {
    return `
    Message: ${this.message}
    Quantity: ${this.quantity}
    UserName: ${this.userName}`;
  }

}