export interface IStreamloots {
    imageUrl: string;
    soundUrl: string;
    message: string;
    settings: IStreamlootsSettings;
    type: string;
    data: IStreamlootsData;
}
interface IStreamlootsSettings {
    duration: number;
    sound: IStreamlootsSettingsSound;
    text: IStreamlootsSettingsText;
    textToSpeech: IStreamlootsSettingsTextToSpeech;
}
interface IStreamlootsSettingsSound {
    volume: number;
}
interface IStreamlootsSettingsText {
    color: string;
    fontWeight: number;
    fontSize: string;
    fontFamily: string;
}
interface IStreamlootsSettingsTextToSpeech {
    volume: number;
}
interface IStreamlootsData {
    badges: IStreamlootsDataBadges;
    cardName: string;
    fields: IStreamlootsDataField[];
    type: string;
}
interface IStreamlootsDataBadges {
}
interface IStreamlootsDataField {
    name: string;
    value: string;
}
export {};
