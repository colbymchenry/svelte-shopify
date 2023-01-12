<script>
    import {onMount} from "svelte";
    import {shopifyMethods} from "./lib/ShopifyMethods";

    export let value = "";

    $: console.log(value);

    onMount(async () => {
        try {
        } catch (error) {
            console.error(error);
        }
    })
</script>

<input type="text" bind:value />