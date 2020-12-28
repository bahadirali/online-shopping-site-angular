export interface IProduct {
    id: number,
    name: string,
    sellerName: string,
    description: string,
    productImagePath: string,
    signedUrl: string,
    boughtByMe: boolean
}