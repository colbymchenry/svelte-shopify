<script>
    import {shopifyMethods} from "./lib/ShopifyMethods.ts";

    export let title = "TEST";
    let count = 0;

    async function handleClick() {
        count++;

        try {
            let res = await shopifyMethods.createCheckout();
            console.log(res)
            console.log(res.webUrl)
            console.log(res.id)
        } catch (error) {
            console.error(error);
        }
    }
</script>

<h1>{title} {count}</h1>

<button type="button" on:click={handleClick}>COUNT UP</button>