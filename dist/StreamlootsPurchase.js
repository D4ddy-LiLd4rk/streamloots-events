"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamlootsPurchase = void 0;
class StreamlootsPurchase {
    constructor(event) {
        this.imageURL = event.imageUrl;
        this.soundURL = event.soundUrl;
        this.message = event.message;
        this.quantity = parseInt(event.data.fields[0].value);
        this.userName = event.data.fields[1].value;
    }
    toString() {
        return `
    Message: ${this.message}
    Quantity: ${this.quantity}
    UserName: ${this.userName}`;
    }
}
exports.StreamlootsPurchase = StreamlootsPurchase;
