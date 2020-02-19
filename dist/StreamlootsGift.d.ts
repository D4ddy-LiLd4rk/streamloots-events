import { IStreamloots } from "./IStreamloots";
import { StreamlootsPurchase } from "./StreamlootsPurchase";
export declare class StreamlootsGift extends StreamlootsPurchase {
    giftee: string;
    constructor(event: IStreamloots);
    toString(): string;
}
