export interface IBook {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        imageLinks: {
            smallThumbnail?: string,
            thumbnail: string,
            small: string,
            medium: string,
            large: string,
            extraLarge: string,
        },
    },
    saleInfo: {
        isEbook: boolean;
        listPrice?: {
            amount: number,
            currencyCode: string,
        }
    }
}