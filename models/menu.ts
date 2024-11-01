type Translation = {
    ru: string;
    en: string;
}

export type Menu = {
    _id: string;
    titles: Translation;
    description: Translation
    price: number;
    weight: string;
    image: string[];
    composition: string;
    category_id: string;
}