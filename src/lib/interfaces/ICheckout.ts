import type IPrice from "./IPrice";

export default interface ICheckout {
    completedAt?: string,
    customAttributes?: any[];
    id?: string;
    lineItems?: any[];

    note?: string;
    totalPriceV2?: IPrice;
    webUrl?: string;
    addLineItems?: Function;
    removeLineItems?: Function;
    replaceLineItems?: Function;
    updateLineItems?: Function;
    clear?: Function;
}

