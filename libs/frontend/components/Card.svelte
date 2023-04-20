<script lang="ts">
    import Button from "./Button.svelte";

    export let subheader: String = ''
    export let headline: String = ''
    export let hasButton: Boolean = false

</script>

<div class="card-wrapper">
    <div class="card-text-wrapper">
        <span class="card-subheader">{subheader}</span>
        <br />
        <span class="card-headline">{headline}</span>
    </div>
    <div>
        {#if hasButton}
            <Button />
        {/if}
    </div>

</div>

<style>
    .card-wrapper {
        outline: solid 1px;
        padding: 20px;
        max-width: 200px;
        height: 200px
    }
    .card-text-wrapper {
        margin-bottom: 20px;
        height: 30%;
    }
    .card-subheader {
        font-size: 16px;
        font-family: Arial, Helvetica;
        color: grey;
    }
    .card-headline {
        font-size: 24px;
        font-family: Arial, Helvetica, sans-serif;
        
    }
</style>