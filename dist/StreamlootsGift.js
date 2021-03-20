"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamlootsGift = void 0;
const StreamlootsPurchase_1 = require("./StreamlootsPurchase");
class StreamlootsGift extends StreamlootsPurchase_1.StreamlootsPurchase {
    constructor(event) {
        super(event);
        this.giftee = event.data.fields[0].value;
        this.quantity = parseInt(event.data.fields[1].value);
        this.userName = event.data.fields[2].value;
    }
    toString() {
        return `
    Message: ${this.message}
    Quantity: ${this.quantity}
    UserName: ${this.userName}
    Giftee: ${this.giftee}`;
    }
}
exports.StreamlootsGift = StreamlootsGift;
