import { IStreamloots } from "./IStreamloots";
export declare class StreamlootsPurchase {
    imageURL: string;
    soundURL: string;
    message: string;
    isGift: boolean;
    quantity: number;
    giftee: string;
    userName: string;
    constructor(event: IStreamloots);
    toString(): string;
}
