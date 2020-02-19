import { IStreamloots } from "./IStreamloots";
export declare class StreamlootsPurchase {
    imageURL: string;
    soundURL: string;
    message: string;
    quantity: number;
    userName: string;
    constructor(event: IStreamloots);
    toString(): string;
}
