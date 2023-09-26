<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>
 
<h1>Tools</h1>

{#if data.session }
     <p>Welcome!</p>
{:else}
    <p>Absent session :(</p>
{/if}
