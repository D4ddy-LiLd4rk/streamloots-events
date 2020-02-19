/// <reference types="node" />
import { RequestOptions, Request } from "web-request";
import { StreamlootsCard } from "./StreamlootsCard";
import { StreamlootsGift } from "./StreamlootsGift";
import { StreamlootsPurchase } from "./StreamlootsPurchase";
import { IncomingMessage } from "http";
import { StreamlootsEvents } from "./StreamlootsEvents";
export declare function listen(streamlootsId: string, options?: RequestOptions, content?: any): StreamlootsRequest<void>;
export interface StreamlootsRequest<T> extends Request<void> {
    on(event: string, listener: Function): this;
    on(event: 'gift', listener: (purchase: StreamlootsGift) => void): this;
    on(event: 'purchase', listener: (purchase: StreamlootsPurchase) => void): this;
    on(event: 'redemption', listener: (card: StreamlootsCard) => void): this;
    on(event: 'data', listener: (data: Buffer | string) => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'complete', listener: (resp: IncomingMessage, body?: string | Buffer) => void): this;
}
export { StreamlootsEvents };
export { StreamlootsCard };
export { StreamlootsGift };
export { StreamlootsPurchase };
