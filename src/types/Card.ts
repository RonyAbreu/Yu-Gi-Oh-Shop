export interface Card {
    id: number;
    name : string;
    type: string;
    attribute: string;
    desc: string;
    card_images: CardImages[];
    card_prices: CardPrice[];
    atk: number;
    def: number;
    level: number;
}

interface CardImages {
    image_url_small : string;
}

interface CardPrice {
    amazon_price : number;
}
