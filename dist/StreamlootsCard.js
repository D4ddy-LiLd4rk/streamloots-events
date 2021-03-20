"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamlootsCard = void 0;
class StreamlootsCard {
    constructor(event) {
        this.imageURL = event.imageUrl;
        this.soundURL = event.soundUrl;
        this.message = event.message;
        this.cardName = event.data.cardName;
        this.rarity = event.data.fields[0].value;
        this.userName = event.data.fields[1].value;
    }
    toString() {
        return `
    CardName: ${this.cardName}
    Message: ${this.message}
    Rarity: ${this.rarity}
    UserName: ${this.userName}`;
    }
}
exports.StreamlootsCard = StreamlootsCard;
