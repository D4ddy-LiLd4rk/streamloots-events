import * as WebRequest from "web-request";
import { IStreamloots } from "./IStreamloots";
import { StreamlootsCard } from "./StreamlootsCard";
import { StreamlootsEvents } from "./StreamlootsEvents";
import { StreamlootsPurchase } from "./StreamlootsPurchase";

const streamlootsStream = WebRequest.stream("https://widgets.streamloots.com/alerts/6883a1d8-e391-4091-8d21-dcf352153424/media-stream");

streamlootsStream.on('data', chunk => {
  if (chunk.length > 2) {
    const jsonStr = chunk.toString().substring(chunk.toString().indexOf('{') - 1);
    let streamlootsEvent: IStreamloots = JSON.parse(jsonStr);
    switch (streamlootsEvent.data.type) {
      case StreamlootsEvents.Redemption:
        let card: StreamlootsCard = new StreamlootsCard(streamlootsEvent);
        console.log(card.toString());
        break;
      case StreamlootsEvents.Purchase:
        let chest: StreamlootsPurchase = new StreamlootsPurchase(streamlootsEvent);
        console.log(chest.toString());
        break;
    }

  }
});