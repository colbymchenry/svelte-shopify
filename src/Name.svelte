<script>
    import {shopifyMethods} from "./lib/ShopifyMethods.ts";

    export let title = "TEST";
    let count = 0;

    async function handleClick() {
        count++;

        try {
            let resCheckout = await shopifyMethods.checkout();
            let resCart = await shopifyMethods.cart();
            console.log(resCheckout)
            console.log(resCart)
        } catch (error) {
            console.error(error);
        }
    }
</script>

<h1>{title} {count}</h1>

<button type="button" on:click={handleClick}>COUNT UP</button>