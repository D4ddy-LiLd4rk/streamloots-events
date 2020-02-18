"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamlootsPurchase {
    constructor(event) {
        this.giftee = '';
        this.imageURL = event.imageUrl;
        this.soundURL = event.soundUrl;
        this.message = event.message;
        this.isGift = event.data.fields[0].name === 'giftee';
        if (this.isGift) {
            this.giftee = event.data.fields[0].value;
            this.quantity = parseInt(event.data.fields[1].value);
            this.userName = event.data.fields[2].value;
        }
        else {
            this.quantity = parseInt(event.data.fields[0].value);
            this.userName = event.data.fields[1].value;
        }
    }
    toString() {
        return `
    IsGift: ${this.isGift}
    Message: ${this.message}
    Quantity: ${this.quantity}
    UserName: ${this.userName}
    Giftee: ${this.giftee}`;
    }
}
exports.StreamlootsPurchase = StreamlootsPurchase;
