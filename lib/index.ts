import { stream, RequestOptions, RequestError, Request, Response } from "web-request";
import { StreamlootsCard } from "./StreamlootsCard";
import { StreamlootsGift } from "./StreamlootsGift";
import { StreamlootsPurchase } from "./StreamlootsPurchase";
import { IncomingMessage } from "http";
import { IStreamloots } from "./IStreamloots";
import { StreamlootsEvents } from "./StreamlootsEvents";

export function listen(streamlootsId: string, options?: RequestOptions, content?: any): StreamlootsRequest<void> {
  let instance: StreamlootsRequest<void> = stream(`https://widgets.streamloots.com/alerts/${streamlootsId}/media-stream`, options, content);

  instance.response = new Promise<Response<void>>((resolve, reject) => {
    instance
      .on('data', chunk => {
        try {
          if (chunk.length > 2) {
            const jsonStr = chunk.toString().substring(chunk.toString().indexOf('{') - 1);
            let streamlootsEvent: IStreamloots = JSON.parse(jsonStr);
            switch (streamlootsEvent.data.type) {
              case StreamlootsEvents.Redemption:
                instance.emit(StreamlootsEvents.Redemption, new StreamlootsCard(streamlootsEvent));
                break;
              case StreamlootsEvents.Purchase:
                if (streamlootsEvent.data.fields[0].name === StreamlootsEvents.Gift) {
                  instance.emit(StreamlootsEvents.Gift, new StreamlootsGift(streamlootsEvent));
                } else {
                  instance.emit(StreamlootsEvents.Purchase, new StreamlootsPurchase(streamlootsEvent));
                }
                break;
            }

          }
          resolve();
        } catch (err) {
          reject(new RequestError(err, instance));
        }
      })
      .on('error', err => reject(new RequestError(err, instance)))
  });

  return instance;
}

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