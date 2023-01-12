import Client from 'shopify-storefront-client';
import type ICheckout from "./interfaces/ICheckout";
import type ILineItem from "./interfaces/ILineItem";
import type ICart from "./interfaces/ICart";

function createShopifyMethods() {
    const client = Client.fromSettings(
        {
            shop: {
                myshopify_domain: 'sveltecomponents.myshopify.com',
                language_code: 'EN',
                country_code: 'US',
            },
            api: {
                token: '8814413b4a78bcde5a993fd4dd4616e2',
                version: '2022-01'
            },
    });


    // const response = await client.checkout.create();
    // const response = await client.checkout.fetch(checkout_id);
    // const response = await client.checkout.lineItems.add(checkoutId, lineItems);
    // const response = await client.checkout.lineItems.remove(checkoutId, lineItemIds);
    // const response = await client.checkout.lineItems.replace(checkoutId, lineItems);
    // const response = await client.checkout.lineItems.update(checkoutId, lineItems);
    // const response = await client.checkout.lineItems.clear(checkoutId);

    async function checkout(checkoutId?: string):Promise<ICheckout> {
        let res:ICheckout;
        if (checkoutId) {
            res = await client.checkout.fetch(checkoutId);
        } else {
            res = await client.checkout.create();
        }
        res.addLineItems = async (lineItems: ILineItem[]) => await client.checkout.lineItems.add(res.id, lineItems);
        res.removeLineItems = async (lineItems: ILineItem[]) => await client.checkout.lineItems.remove(res.id, lineItems);
        res.updateLineItems = async (lineItems: ILineItem[]) => await client.checkout.lineItems.update(res.id, lineItems);
        res.replaceLineItems = async (lineItems: ILineItem[]) => await client.checkout.lineItems.replace(res.id, lineItems);
        res.clear = async () => await client.checkout.lineItems.clear(res.id);
        return res;
    }

    async function cart(cartId?: string):Promise<ICart> {
        let res:ICart;
        let localCartId = document.cookie.split(";").length ? document.cookie.split(";").find((c: string) => c.includes("cart="))?.split("=")[1] : undefined;
        if (cartId) {
            res = await client.cart.fetch(cartId);
        }else if (localCartId) {
            console.log(`gid://shopify/Cart/${localCartId}`)
            console.log("CARRT", await client.cart.fetch(`gid://shopify/Cart/${localCartId}`))
            res = await client.cart.fetch(`gid://shopify/Cart/${localCartId}`)
        } else {
            res = await client.cart.create();
        }
        res.addLineItems = async (lineItems: ILineItem[]) => await client.cart.lineItems.add(res.id, lineItems);
        res.removeLineItems = async (lineItems: ILineItem[]) => await client.cart.lineItems.remove(res.id, lineItems);
        res.updateLineItems = async (lineItems: ILineItem[]) => await client.cart.lineItems.update(res.id, lineItems);
        return res;
    }



    return {
        checkout, cart
    }

}

export const shopifyMethods = createShopifyMethods();