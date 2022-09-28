export interface IPreviewBook {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string,
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