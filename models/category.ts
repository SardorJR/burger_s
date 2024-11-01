type Translation = {
    ru: string;
    en: string;
}

export type Category = {
    _id: string;
    name: Translation;
    images: string[];   
}