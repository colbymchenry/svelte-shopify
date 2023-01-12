import Client from 'shopify-storefront-client';
import ICheckout from "./interfaces/ICheckout";

function createShopifyMethods() {
    const client = new Client(
        {
            shop: {
                myshopify_domain: 'sveltecomponents.myshopify.com',
                language_code: 'EN',
                country_code: 'US',
            },
            api: {
                token: '8814413b4a78bcde5a993fd4dd4616e2',
                version: '2023-01'
            },
    });


    // const response = await client.checkout.create();
    // const response = await client.checkout.fetch(checkout_id);
    // const response = await client.checkout.lineItems.add(checkoutId, lineItems);
    // const response = await client.checkout.lineItems.remove(checkoutId, lineItemIds);
    // const response = await client.checkout.lineItems.replace(checkoutId, lineItems);
    // const response = await client.checkout.lineItems.update(checkoutId, lineItems);
    // const response = await client.checkout.lineItems.clear(checkoutId);

    async function createCheckout():Promise<ICheckout> {
        return await client.checkout.create();
    }

    async function getCheckout(checkout_id) {

    }

    return {
        createCheckout
    }

}

export const shopifyMethods = createShopifyMethods();