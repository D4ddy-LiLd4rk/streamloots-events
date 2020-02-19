import { IStreamloots } from "./IStreamloots";
import { StreamlootsPurchase } from "./StreamlootsPurchase";

export class StreamlootsGift extends StreamlootsPurchase {
  giftee: string;

  constructor(event: IStreamloots) {
    super(event);
    this.giftee = event.data.fields[0].value;
    this.quantity = parseInt(event.data.fields[1].value);
    this.userName = event.data.fields[2].value;
  }

  toString(): string {
    return `
    Message: ${this.message}
    Quantity: ${this.quantity}
    UserName: ${this.userName}
    Giftee: ${this.giftee}`;
  }

}