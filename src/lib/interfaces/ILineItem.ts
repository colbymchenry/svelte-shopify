import type IAttribute from "./IAttribute";

export default interface ILineItem {
    merchandiseId?: string;
    quantity?: number;
    sellingPlanId?: string;
    attributes: IAttribute[],
}