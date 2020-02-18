import { IStreamloots } from "./IStreamloots";
export declare class StreamlootsCard {
    imageURL: string;
    soundURL: string;
    message: string;
    cardName: string;
    rarity: string;
    userName: string;
    constructor(event: IStreamloots);
    toString(): string;
}
