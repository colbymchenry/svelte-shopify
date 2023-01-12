export default interface ICheckout {
    completedAt?: string,
    customAttributes?: any[];
    id?: string;
    lineItems?: any[];

    note?: string;
    totalPriceV2?: ITotalPrice;
    webUrl?: string;
}

interface ITotalPrice {
    amount?: number;
    currencyCode?: string;
}