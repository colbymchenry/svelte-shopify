import IAttribute from "./IAttribute";
import ILineItem from "./ILineItem";
import IPrice from "./IPrice";

export default interface ICart {
    id?: string;
    addLineItems?: Function;
    removeLineItems?: Function;
    updateLineItems?: Function;
    attributes?: IAttribute[];
    checkoutId?: string;
    checkoutUrl?: string;
    lineItems?: ILineItem[];
    lines?: any[];
    totalQuantity?: number;
    cost?: ICost;
}

interface ICost {
    checkoutChargeAmount?: IPrice;
    subtotalAmount?: IPrice;
    totalAmount?: IPrice;
}