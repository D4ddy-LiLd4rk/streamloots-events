"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebRequest = require("web-request");
const StreamlootsCard_1 = require("./StreamlootsCard");
const StreamlootsEvents_1 = require("./StreamlootsEvents");
const StreamlootsPurchase_1 = require("./StreamlootsPurchase");
const streamlootsStream = WebRequest.stream("https://widgets.streamloots.com/alerts/6883a1d8-e391-4091-8d21-dcf352153424/media-stream");
streamlootsStream.on('data', chunk => {
    if (chunk.length > 2) {
        const jsonStr = chunk.toString().substring(chunk.toString().indexOf('{') - 1);
        let streamlootsEvent = JSON.parse(jsonStr);
        switch (streamlootsEvent.data.type) {
            case StreamlootsEvents_1.StreamlootsEvents.Redemption:
                let card = new StreamlootsCard_1.StreamlootsCard(streamlootsEvent);
                console.log(card.toString());
                break;
            case StreamlootsEvents_1.StreamlootsEvents.Purchase:
                let chest = new StreamlootsPurchase_1.StreamlootsPurchase(streamlootsEvent);
                console.log(chest.toString());
                break;
        }
    }
});
