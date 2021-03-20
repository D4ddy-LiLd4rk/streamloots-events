"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamlootsPurchase = exports.StreamlootsGift = exports.StreamlootsCard = exports.StreamlootsEvents = exports.listen = void 0;
const web_request_1 = require("web-request");
const StreamlootsCard_1 = require("./StreamlootsCard");
Object.defineProperty(exports, "StreamlootsCard", { enumerable: true, get: function () { return StreamlootsCard_1.StreamlootsCard; } });
const StreamlootsGift_1 = require("./StreamlootsGift");
Object.defineProperty(exports, "StreamlootsGift", { enumerable: true, get: function () { return StreamlootsGift_1.StreamlootsGift; } });
const StreamlootsPurchase_1 = require("./StreamlootsPurchase");
Object.defineProperty(exports, "StreamlootsPurchase", { enumerable: true, get: function () { return StreamlootsPurchase_1.StreamlootsPurchase; } });
const http_1 = require("http");
const StreamlootsEvents_1 = require("./StreamlootsEvents");
Object.defineProperty(exports, "StreamlootsEvents", { enumerable: true, get: function () { return StreamlootsEvents_1.StreamlootsEvents; } });
const node_net_1 = require("node:net");
function listen(streamlootsId, options, content) {
    let instance = web_request_1.stream(`https://widgets.streamloots.com/alerts/${streamlootsId}/media-stream`, options, content);
    let alertData = "";
    instance.response = new Promise((resolve, reject) => {
        instance.on('data', chunk => {
            try {
                if (chunk.length > 2) {
                    let jsonStr = chunk.toString();
                    if (jsonStr.startsWith("data:"))
                        jsonStr = jsonStr.substring(chunk.toString().indexOf('{') - 1);
                    alertData += jsonStr;
                    if (jsonStr.trim().endsWith("}}")) {
                        let streamlootsEvent = JSON.parse(alertData);
                        switch (streamlootsEvent.data.type) {
                            case StreamlootsEvents_1.StreamlootsEvents.Redemption:
                                instance.emit(StreamlootsEvents_1.StreamlootsEvents.Redemption, new StreamlootsCard_1.StreamlootsCard(streamlootsEvent));
                                break;
                            case StreamlootsEvents_1.StreamlootsEvents.Purchase:
                                if ((streamlootsEvent.data.fields[0].name).startsWith(StreamlootsEvents_1.StreamlootsEvents.Gift)) {
                                    instance.emit(StreamlootsEvents_1.StreamlootsEvents.Gift, new StreamlootsGift_1.StreamlootsGift(streamlootsEvent));
                                }
                                else {
                                    instance.emit(StreamlootsEvents_1.StreamlootsEvents.Purchase, new StreamlootsPurchase_1.StreamlootsPurchase(streamlootsEvent));
                                }
                                break;
                        }
                        alertData = "";
                        resolve(new web_request_1.Response(instance, new http_1.IncomingMessage(new node_net_1.Socket()), (function () { })()));
                    }
                }
            }
            catch (err) {
                reject(new web_request_1.RequestError(err, instance));
            }
        })
            .on('error', err => reject(new web_request_1.RequestError(err, instance)));
    });
    return instance;
}
exports.listen = listen;
